import { ProductImage } from '@/ui/atoms/ProductImage';
import { ProductDetailedDescription } from '@/ui/atoms/ProductDetailedDescription';
import type { ProductListItemFragment } from '@/gql/graphql';

interface ProductDetailsProps {
  product: ProductListItemFragment;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [image] = product.images;

  return (
    <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 ">
      {image && <ProductImage src={image.url} alt={product.name} />}
      <ProductDetailedDescription product={product} />
    </article>
  );
}
