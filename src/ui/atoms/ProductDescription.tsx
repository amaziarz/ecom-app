import type { Product } from '@/types/Product';
import { formatPrice } from '@/utils/formatPrice';

interface ProductDescriptionProps {
  product: Product;
}

export function ProductDescription({
  product: { name, category, price },
}: ProductDescriptionProps) {
  return (
    <div className="px-4 py-4">
      <div className="mb-1 flex justify-between">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-lg">{formatPrice(price / 100)}</p>
      </div>
      <p className="text-lg">{category}</p>
    </div>
  );
}
