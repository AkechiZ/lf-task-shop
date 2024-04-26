import { App, Button } from 'antd';
import { FC } from 'react';
import {
  useStore,
} from '../store';
import {CartList} from "./CartList";
import {useInstallments, useSubtotal, useTotalProducts} from "../hooks";

const Subtotal: FC<{
  value: number;
  installments?: string;
}> = (props) => {
  return (
    <div className="flex items-center mb-4">
      <div>小计</div>
      <div className="flex-auto text-right">
        <div className="text-lg font-bold">$ {props.value.toFixed(2)}</div>
        {props.installments && (
          <div className="text-s">
            或最少 <span className="text-base font-bold">$ {props.installments}</span>
            /月
          </div>
        )}
      </div>
    </div>
  );
};

export const Cart: FC = () => {
  const products = useStore((state) => state.products);
  const clear = useStore((state) => state.clearCart);
  const totalAmount = useTotalProducts();
  const subtotal = useSubtotal();
  const installments = useInstallments();
  const { modal, message } = App.useApp();

  const onCheckout = () => {
    if (!Object.keys(products).length) {
      message.info('购物车是空的，请添加你心仪的商品到购物车吧');
      return;
    }

    modal.confirm({
      title: '结算',
      content: `共 ${totalAmount} 件商品，总计 $${subtotal}，确定结算？`,
      onOk() {
        clear();
        message.success(`结算完成，共支付 $${subtotal}`);
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-auto px-2 min-h-0 overflow-y-auto">
        <CartList value={products} />
      </div>
      <div className="flex-none flex flex-col p-2 bg-gray-200">
        <Subtotal value={subtotal} installments={installments} />
        <Button type="primary" ghost block onClick={onCheckout}>
          结算
        </Button>
      </div>
    </div>
  );
};
