import { ProductImage } from '@/ui/atoms/ProductImage';
import { ProductDetailedDescription } from '@/ui/atoms/ProductDetailedDescription';
import type { Product } from '@/types/Product';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 ">
      <ProductImage src={product.image} alt={product.title} />
      <ProductDetailedDescription product={product} />
    </article>
  );
}
