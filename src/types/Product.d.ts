import {Sort} from "../services";

export interface IProductDto {
    availableSizes: string[];
    currencyFormat: string;
    currencyId: string;
    description: string;
    id: number;
    installments: number;
    isFreeShipping: boolean;
    price: number;
    sku: number;
    style: string;
    title: string;
}

export interface ICartState {
    show: boolean;
    subtotal: number;
    products: IProductInCart;
    showCart: (show?: boolean) => void;
    increase: (sku: string, size: string, amount?: number) => void;
    // decrease: (sku: string, size: string, amount?: number) => void;
    changeProductAmount: (sku: string, size: string, amount: number) => void;
    addProduct: (product: IProductDto, size: string, amount?: number) => void;
    removeProdcut: (sku: string, size: string) => void;
    clearCart: () => void;
}

export interface IProductInCart {
    [sku: string]: {
        [size: string]: {
            product: IProductDto;
            size: string;
            amount: number;
        };
    };
}

export interface IProductProps {
    data: IProductDto;
}

export interface IProductListProps {
    value: IProductInCart;
}

export interface IProductState {
    sizes: string[];
    sort: Array<Sort<IProductDto>>;
    setSize: (sizes: string[]) => void;
    setSort: (sort: Array<Sort<IProductDto>>) => void;
}
