import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {useInstallments, useSubtotal, useTotalProducts} from '../src/hooks';
describe('useTotalProducts hook', () => {
    it('商品数量应该是数字', () => {
        // renderHook 模拟hook执行环境
        const { result } = renderHook(() => useTotalProducts());
        console.log("result",result)
        expect(result.current).toBeTypeOf('number')
    });
});

describe('useSubtotal hook', () => {
    it('商品总价应该是数字', () => {
        // renderHook 模拟hook执行环境
        const { result } = renderHook(() => useSubtotal());
        console.log("result",result)
        expect(result.current).toBeTypeOf('number')
    });
});

describe('test hook', () => {
    it('分期付款保留两位小数点', () => {
        // renderHook 模拟hook执行环境
        const { result } = renderHook(() => useInstallments());
        console.log("result",result)
        const regex = /^\d+\.\d{2}$/; // 正则表达式，匹配两位小数点的数字
        expect(regex.test(result.current.toString())).toBe(true);
    });
});