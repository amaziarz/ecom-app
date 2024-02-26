import type { Product } from '@/types/Product';
import { formatPrice } from '@/utils/formatPrice';

interface ProductDescriptionProps {
  product: Product;
}

export function ProductDescription({
  product: { title, category, price },
}: ProductDescriptionProps) {
  return (
    <div className="p-2">
      <div className="mb-1 flex justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-base">{formatPrice(price)}</p>
      </div>
      <p className="text-base">{category}</p>
    </div>
  );
}
