import type { Product } from '@/types/Product';
import { ProductImage } from '@/ui/atoms/ProductImage';
import { ProductDescription } from '@/ui/atoms/ProductDescription';

interface ProductItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductItemProps) {
  const {
    image: { src, alt },
  } = product;
  return (
    <li>
      <article>
        <ProductImage src={src} alt={alt} />
        <ProductDescription product={product} />
      </article>
    </li>
  );
}
