import { ProductImage } from '@/ui/atoms/ProductImage';
import type { Product } from '@/types/Product';
import { ProductDescription } from '@/ui/atoms/ProductDescription';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { image, title } = product;

  return (
    <article>
      <ProductImage src={image} alt={title} />
      <ProductDescription product={product} />
    </article>
  );
}
