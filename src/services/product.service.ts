import { IProductDto } from '../types/Product';
import data from './products.json';

export interface Sort<T> {
  property: keyof T;
  order: 'asc' | 'desc';
}

export interface PageRequest<T> {
  page?: number;
  limit?: number;
  sort?: Array<Sort<T>>;
}

export interface ProductQuery {
  sizes?: string[];
}

export class ProductService {
  private mockError = false;

  getProducts(
    query?: ProductQuery,
    pageable?: PageRequest<IProductDto>,
  ): Promise<IProductDto[]> {
    return new Promise<IProductDto[]>((resolve, reject) => {
      let products = [...data.data.products];

      if (query?.sizes?.length) {
        products = products.filter((item) => {
          return item.availableSizes.some((size) =>
            query.sizes?.includes(size),
          );
        });
      }

      if (pageable?.sort) {
        pageable.sort.forEach((sort) => {
          products.sort((a, b) => {
            let result = a[sort.property] >= b[sort.property] ? 1 : -1;

            const order = sort.order === 'asc' ? 1 : -1;

            return result * order;
          });
        });
      }

      const delay = Math.floor(Math.random() * 2) + 1;

      setTimeout(() => {
        if (this.mockError && Math.random() > 0.5) {
          reject(new Error('未知错误'));
        }

        resolve(products);
      }, delay * 1000);
    });
  }
}



export const productService = new ProductService();
