import type { Product } from '@/types/Product';
import { client } from '@/api/client';

export async function getProducts(): Promise<Product[]> {
  return client<Product[]>('/api/products?take=20');
}

export async function getProductById(id: Product['id']): Promise<Product> {
  return client<Product>(`/api/products/${id}`);
}
