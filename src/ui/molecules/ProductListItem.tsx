import Link from 'next/link';
import type { Product } from '@/types/Product';
import { ProductImage } from '@/ui/atoms/ProductImage';
import { ProductDescription } from '@/ui/atoms/ProductDescription';

interface ProductItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductItemProps) {
  return (
    <li>
      <Link href={`/products/${product.id}`}>
        <article>
          <ProductImage src={product.image} alt={product.title} />
          <ProductDescription product={product} />
        </article>
      </Link>
    </li>
  );
}
