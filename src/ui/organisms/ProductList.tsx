import type { Product } from '@/types/Product';
import { ProductListItem } from '@/ui/molecules/ProductListItem';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <ul
      data-testid="proudcts-list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
