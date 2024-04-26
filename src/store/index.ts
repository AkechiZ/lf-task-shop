import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { StateCreator } from 'zustand';
import {ICartState, IProductDto, IProductState} from '../types/Product';
import { Sort } from '../services';


//监听 尺寸size & 排序sort
export const createProductStore: StateCreator<AppState, [], [], IProductState> = (
    set,
    get,
) => ({
    sizes: [],
    sort: [{ property: 'price', order: 'desc' }],
    setSize: (sizes: string[]) => {
        set(() => ({
            sizes,
        }));
    },
    setSort: (sort: Array<Sort<IProductDto>>) => {
        set(() => ({
            sort,
        }));
    },
});

export const createCartSlice: StateCreator<AppState, [], [], ICartState> = (
    set,
    get,
) => ({
    show: false,
    subtotal: 0,
    products: {},

    //购物车加入商品
    addProduct: (product, size, amount = 1) => {
        const IProductInCart = get().products[product.sku]?.[size];

        if (IProductInCart) {
            get().increase(product.sku.toString(), size);
            return;
        }

        set((state) => {
            state.products[product.sku] ??= {};
            state.products[product.sku][size] = {
                amount,
                product,
                size,
            };

            return state;
        });
    },

    //购物车 更改购物车商品数量
    changeProductAmount: (sku: string, size: string, amount: number) => {
        const inCard = get().products[sku]?.[size];

        if (!inCard) {
            return;
        }

        set((state) => {
            state.products[sku][size].amount = amount;
            return state;
        });
    },

    //增加购物车商品数量
    increase: (sku, size, amount = 1) => {
        const product = get().products[sku]?.[size];

        if (!product) {
            return;
        }

        set((state) => {
            state.products[sku][size].amount += amount;

            return state;
        });
    },

    //移除购物车商品
    removeProdcut: (sku, size) => {
        set((state) => {
            if (state.products[sku]?.[size]) {
                delete state.products[sku][size];
            }

            return state;
        });
    },

    //清理购物车
    clearCart: () => {
        set(() => {
            return {
                products: {},
            };
        });
    },

    //展示购物车
    showCart: (show = true) => {
        set({ show });
    },
});

export type AppState = ICartState & IProductState;

//创建store
export const useStore = create<
    AppState,
    [['zustand/persist', AppState], ['zustand/immer', AppState]]
>(
    persist( //状态持久化 & 不可变
        immer((...a) => ({
            ...createCartSlice(...a),
            ...createProductStore(...a),
        })),
        { name: 'cart-store' },
    ),
);
