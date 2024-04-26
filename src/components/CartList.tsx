import React, {FC, Fragment} from "react";
import {IProductDto, IProductListProps} from "../types/Product";
import {useStore} from "../store";
import {Button, Empty, InputNumber, List} from "antd";

export const CartItem: FC<{
    product: IProductDto;
    amount: number;
    size: string;
}> = (props) => {
    const { amount, product, size } = props;

    const changeProductAmount = useStore((state) => state.changeProductAmount);

    return (
        <div data-testid="cart-product" className="flex items-start overflow-hidden">
            <img
                className="w-16 h-24 object-cover"
                src={`static/products/${product.sku}-1-product.webp`}
                alt=""
            />
            <div className="ml-2 flex-auto overflow-hidden">
                <h4 className="text-base overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.title}
                </h4>
                <div className="text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
                    {size} {product.style && <>| {product.style}</>}
                </div>
                <div>
                    <span className="text-xs">{product.currencyFormat}</span>
                    <span className="text-sm font-bold">{product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                    数量：
                    <InputNumber
                        className="w-14"
                        value={amount}
                        size="small"
                        step={1}
                        min={1}
                        onChange={(value) => {
                            if (value == null) {
                                return;
                            }

                            changeProductAmount(product.sku.toString(), size, value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const CartList: FC<IProductListProps> = (props) => {
    const data:[string, { [p: string]: { product: IProductDto; size: string; amount: number } }][] = Object.entries(props.value);

    const removeProduct = useStore((state) => state.removeProdcut);

    const nonEmptyObjectsCount = data.filter(
        ([_, obj]) => Object.keys(obj).length !== 0
    ).length ?? 0

    return nonEmptyObjectsCount === 0 ? (
        <div className="py-8">
            <Empty description="请添加商品到购物车" />
        </div>
    ) : (
        <List>
            {data.map(([sku, item]) => (
                <Fragment key={sku}>
                    {Object.entries(item).map(([size, item]) => (
                        <List.Item
                            key={size}
                            extra={
                                <Button
                                    type="text"
                                    danger
                                    onClick={() => {
                                        removeProduct(sku, size);
                                    }}
                                >
                                    删除
                                </Button>
                            }
                        >
                            <CartItem
                                product={item.product}
                                amount={item.amount}
                                size={item.size}
                            />
                        </List.Item>
                    ))}
                </Fragment>
            ))}
        </List>
    );
};