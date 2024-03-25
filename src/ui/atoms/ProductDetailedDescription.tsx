import { formatPrice } from '@/utils/formatPrice';
import type { ProductListItemFragment } from '@/gql/graphql';

interface ProductDetailedDescriptionProps {
  product: ProductListItemFragment;
}

export function ProductDetailedDescription({
  product: { name, categories, price, description },
}: ProductDetailedDescriptionProps) {
  const [category] = categories;

  return (
    <section>
      <h1 className="text-2xl font-medium">{name}</h1>
      {category && (
        <h2 className="mb-4 text-base font-medium">{category.name}</h2>
      )}
      <p className="mb-4">{formatPrice(price)}</p>
      <p className="text-base">{description}</p>
    </section>
  );
}
