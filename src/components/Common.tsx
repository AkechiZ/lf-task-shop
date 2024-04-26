import styled from '@emotion/styled';
import {Skeleton} from "antd";

export const ProductImage = styled.div<{sku: number | string}>((props) => {
    const image1 = './static/products/' + props.sku + '-1-product.webp';
    const image2 = './static/products/' + props.sku + '-2-product.webp';

    return {
        position: 'relative',
        paddingTop: '145.45%',
        borderRadius: '8px 8px 0 0',
        backgroundImage: `url(${image1})`,

        '&:hover': {
            backgroundImage: `url(${image2})`,
        },
    };
});

export const LoadingImage = styled(Skeleton.Image)`
  width: 100% !important;
  height: 256px !important;
  border-radius: 8px 8px 0 0;

  > .ant-skeleton-image {
    width: 100%;
    height: 100%;
  }
`;

export const FreeShipping = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
  border-top-right-radius: 8px;
  color: #fff;
  background-color: #000;
  font-size: 12px;
`;

export const Sizes = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
`;

export const Size = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: 2px 2px;
  color: #fff;
  background-color: ${(props) => (props.active ? '#1677ff' : '#000')};
  font-size: 12px;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  line-height: initial;
`;

export const ToolbarItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  font-size: 32px;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2)
  }
`;
