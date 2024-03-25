import Link from 'next/link';
import { ProductImage } from '@/ui/atoms/ProductImage';
import { ProductDescription } from '@/ui/atoms/ProductDescription';
import type { ProductListItemFragment } from '@/gql/graphql';

interface ProductItemProps {
  product: ProductListItemFragment;
}

export function ProductListItem({ product }: ProductItemProps) {
  const [image] = product.images;

  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          {image && <ProductImage src={image.url} alt={product.name} />}
          <ProductDescription product={product} />
        </article>
      </Link>
    </li>
  );
}
