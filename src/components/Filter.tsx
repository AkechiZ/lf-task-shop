import { Checkbox, Form, Radio } from 'antd';
import { useStore } from '../store';

const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'].map((size) => ({
  label: size,
  value: size,
}));

export const Filter = () => {
  const [size, setSize] = useStore((state) => [
    state.sizes,
    state.setSize,
  ]);

  const [sort, setSort] = useStore((state) => [
    state.sort,
    state.setSort,
  ]);
  const [priceSort] = sort;

  return (
    <Form>
      <Form.Item className="mb-4" label="尺寸">
        <Checkbox.Group
          className='sm:block'
          value={size}
          options={sizes}
          onChange={(values) => {
            setSize(values);
          }}
        />
      </Form.Item>
      <Form.Item className="mb-4" label="价格">
        <Radio.Group
          value={priceSort.order}
          onChange={(e) => {
            setSort([
              {
                order: e.target.value,
                property: 'price',
              },
            ]);
          }}
        >
          <Radio.Button value="asc">按价格升序</Radio.Button>
          <Radio.Button value="desc">按价格降序</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
