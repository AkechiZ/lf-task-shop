import { useQuery } from '@tanstack/react-query';
import { productService, nestService } from '../services';
import { useStore } from '../store';

//获取商品列表
export const useProduct = () => {
    const [sizes, sort] = useStore((state) => [state.sizes, state.sort]);

    return useQuery({
        queryKey: [
            'products',
            {
                sizes,
                sort,
            },
        ],
        queryFn: () => {
            //本地运行
            // return nestService._getProducts({ sizes }, { sort });
            return productService.getProducts({ sizes }, { sort });
        },
        staleTime: 5000,
        retry: false,
    });
};

//计算商品数量
export const useTotalProducts = () =>
    useStore((state) =>
        Object.values(state.products).reduce((acc, cur) => {
            acc += Object.values(cur).reduce((acc, cur) => {
                acc += cur.amount;

                return acc;
            }, 0);
            return acc;
        }, 0),
    );

//计算商品总价
export const useSubtotal = () =>
    useStore((state) =>
        Object.values(state.products).reduce((acc, cur) => {
            acc += Object.values(cur).reduce((acc, cur) => {
                acc += cur.product.price * cur.amount;

                return acc;
            }, 0);

            return acc;
        }, 0),
    );

//计算分期付款
export const useInstallments = () =>
    useStore((state) => {
        const total = Object.values(state.products)
            .flatMap((item) =>
                Object.values(item).map(
                    (innerItem) => (innerItem.amount * innerItem.product.price) / innerItem.product.installments
                )
            )
            .reduce((acc, curr) => acc + curr, 0);

        const roundedTotal = Math.ceil(total * 100) / 100; // 向上取整到小数点后两位
        return roundedTotal.toFixed(2); // 保留两位小数
    });