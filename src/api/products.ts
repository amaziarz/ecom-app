import type { Product } from '@/types/Product';
import { client } from '@/api/client';

interface GetProductsParams {
  pageNo: number;
}

const ITEMS_PER_PAGE = 20;
export async function getProducts({
  pageNo,
}: GetProductsParams): Promise<Product[]> {
  return client<Product[]>(
    `/api/products?take=${ITEMS_PER_PAGE}&offset=${pageNo * ITEMS_PER_PAGE - ITEMS_PER_PAGE}`,
  );
}

export async function getProductById(id: Product['id']): Promise<Product> {
  return client<Product>(`/api/products/${id}`);
}
