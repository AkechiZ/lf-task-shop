import {Button, Card, Col, Empty, Row, Skeleton} from 'antd';
import React, { FC } from 'react';
import { useProduct } from '../hooks';
import { Product } from './Product';
import {LoadingImage} from "./Common";

export const ProductList: FC = () => {
  const { data, isLoading, error, refetch } = useProduct();

  if (isLoading) { //判断loading状态
    return (
      <Row gutter={[16, 16]}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Col key={i} xs={12} sm={8} md={6}>
              <Card data-testid="loading-card" cover={<LoadingImage active />}>
                  <Skeleton active />
              </Card>
          </Col>
        ))}
      </Row>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center py-6">
        <Empty description="获取商品失败，请重新查询" />
        <Button
          className='mt-4'
          type="primary"
          onClick={() => {
            refetch();
          }}
        >
          重试
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="my-2">共找到 {data?.length ?? 0} 个商品</div>
      <Row gutter={[16, 16]}>
        {data?.map((item) => (
          <Col key={item.id} span={6} lg={6} md={8} sm={12} xs={12}>
            <Product data={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
