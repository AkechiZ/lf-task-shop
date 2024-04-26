import React from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Drawer, Layout } from 'antd';
import { useStore } from './store';
import {Filter} from "./components/Filter";
import {ProductList} from "./components/ProductList";
import {Cart} from "./components/Cart";
import {Toolbar, ToolbarItem} from "./components/Common";
import {useTotalProducts} from "./hooks";

function App() {
  const [show, showCart] = useStore((state) => [state.show, state.showCart]);
  const total = useTotalProducts();

  return (
    <Layout className='min-h-full'>
      <Layout.Header className="z-10 sticky top-0 w-full px-4 lg:px-8">
        <div className="flex items-center h-full bg-black">
          <div className="text-lg text-white">江南服装厂</div>
          <Toolbar className="flex-auto">
            <ToolbarItem
              onClick={() => {
                showCart();
              }}
            >
              <Badge count={total}>
                <ShoppingCartOutlined className="text-3xl text-white align-middle" />
              </Badge>
            </ToolbarItem>
          </Toolbar>
        </div>
      </Layout.Header>
      <Layout.Content >
        <div className="flex flex-col max-w-5xl mx-auto p-4">
          <Filter />
          <ProductList />
        </div>
      </Layout.Content>
      <Drawer
        open={show}
        onClose={() => showCart(false)}
        title="购物车"
        placement="right"
      >
        <Cart />
      </Drawer>
    </Layout>
  );
}

export default App;
