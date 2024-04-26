import { IProductDto } from '../types/Product';
import {PageRequest, ProductQuery} from "./product.service";

class NestService {
    private apiUrl: string = "http://localhost:3000"; // Nest 服务的地址

    _getProducts(
        query?: ProductQuery,
        pageable?: PageRequest<IProductDto>,
    ): Promise<IProductDto[]> {
        // 构建请求 URL
        let url = `${this.apiUrl}/cart/`;

        if (pageable?.sort ) {
            url += pageable?.sort?.[0].order || "desc"
        }

        if (query && query.sizes && query.sizes.length > 0) {
            const sizesQueryParam = Array.isArray(query.sizes) ? query.sizes.join(',') : query.sizes;
            url += `?size=${sizesQueryParam}`;
        }

        return new Promise<IProductDto[]>((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }
}


export const nestService = new NestService();
