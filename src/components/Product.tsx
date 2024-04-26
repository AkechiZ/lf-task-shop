import { App, Button, Card } from 'antd';
import React, { FC, useState } from 'react';
import { IProductProps} from '../types/Product';
import { useStore } from '../store';
import {FreeShipping, ProductImage, Size, Sizes} from "./Common";

export const Product: FC<IProductProps> = (props) => {
  const { message } = App.useApp();
  const [currentSize, setSize] = useState(props.data.availableSizes[0]);
  const addProduct = useStore((state) => state.addProduct);

  const { data } = props;

  const [integer, fractional] = String(data.price.toFixed(2)).split('.');

  return (
    <Card
      className="relative"
      cover={
        <ProductImage sku={data.sku}>
          {data.isFreeShipping && <FreeShipping data-testid="freeshipping">包邮</FreeShipping>}
          {data.availableSizes.length > 0 && (
            <Sizes>
              {data.availableSizes.map((size) => (
                <Size
                  key={size}
                  active={currentSize === size}
                  onClick={() => {
                    setSize(size);
                  }}
                >
                  {size}
                </Size>
              ))}
            </Sizes>
          )}
        </ProductImage>
      }
    >
      <div className="flex flex-col items-center">
        <p className="h-12 overflow-hidden">{data.title}</p>
        <p>
          <span className="text-xs">{data.currencyFormat}</span>
          <span className="text-2xl font-bold">{integer}</span>
          <span className="text-base">.{fractional}</span>
        </p>
        {data.installments > 0 ? (
          <p data-testid="installments" className="text-gray-500 text-sm">
            或分 {data.installments} 期，每期
            <span className="font-bold">
              ${(data.price / data.installments).toFixed(2)}
            </span>
          </p>
        ) : (
          <div className="text-sm whitespace-pre"> </div>
        )}
        <Button
          data-testid="add-product"
          className="mt-2"
          type="primary"
          ghost
          block
          onClick={() => {
            addProduct(data, currentSize);
            message.success && message.success(`「${data.title} - ${currentSize}」已添加到购物车`);
          }}
        >
          添加到购物车
        </Button>
      </div>
    </Card>
  );
};
