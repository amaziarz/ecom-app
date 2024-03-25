import { executeGraphql } from '@/api/exacuteGraphql';
import {
  ProductGetByIdDocument,
  type ProductListItemFragment,
  ProductsGetListDocument,
} from '@/gql/graphql';

interface GetProductsParams {
  pageNo: number;
}

const ITEMS_PER_PAGE = 20;
export async function getProducts(
  {
    // pageNo,
  }: GetProductsParams,
): Promise<ProductListItemFragment[]> {
  const response = await executeGraphql(ProductsGetListDocument);
  return response.products.data;
}

export async function getProductById(
  id: ProductListItemFragment['id'],
): Promise<ProductListItemFragment | null> {
  const response = await executeGraphql(ProductGetByIdDocument, { id });
  return response.product ?? null;
}
