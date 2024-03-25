import { formatPrice } from '@/utils/formatPrice';
import type { ProductListItemFragment } from '@/gql/graphql';

interface ProductDescriptionProps {
  product: ProductListItemFragment;
}

export function ProductDescription({
  product: { name, categories, price },
}: ProductDescriptionProps) {
  const [category] = categories;

  return (
    <div className="p-2">
      <div className="mb-1 flex justify-between">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-base">{formatPrice(price)}</p>
      </div>
      {category && <p className="text-base">{category.name}</p>}
    </div>
  );
}
