import {act, fireEvent, render} from '@testing-library/react';
import { expect, test } from 'vitest';
import {Product} from '../src/components/Product';
import '@testing-library/jest-dom';

let productData = {
        "availableSizes": [
            "L",
            "XL"
        ],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "",
        "id": 9,
        "installments": 5,
        "isFreeShipping": true,
        "price": 134.9,
        "sku": 11600983276356164,
        "style": "",
        "title": "Tropical Wine T-shirt"
    }

test('文字渲染正常', async () => {
    // 渲染组件
    const { getByText } = render(<Product data={productData} />);
    const nameElement = getByText('134');
    console.log(getByText)
    expect(nameElement).toBeInTheDocument();

});

test('button渲染正常，可点击', async () => {
    // 渲染组件
    const product = render(<Product data={productData} />);
    // 异步等待获取指定的DOM元素
    const button = (await product.findByTestId('add-product'));
    expect(button).toBeInTheDocument();
    act(() => {
        // 模拟 click 用户事件
        fireEvent.click(button);
    });
});

test('check点击正常，可点击', async () => {
    // 渲染组件
    const product = render(<Product data={productData} />);
    // 异步等待获取指定的DOM元素
    const check = (await product.findByText('XL'));
    expect(check).toBeInTheDocument();
    act(() => {
        // 模拟 click 用户事件
        fireEvent.click(check);
    });
});
