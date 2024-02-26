import { formatPrice } from '@/utils/formatPrice';
import type { Product } from '@/types/Product';

interface ProductDetailedDescriptionProps {
  product: Product;
}

export function ProductDetailedDescription({
  product: { title, category, price, description },
}: ProductDetailedDescriptionProps) {
  return (
    <section>
      <h1 className="text-2xl font-medium">{title}</h1>
      <h2 className="mb-4 text-base font-medium">{category}</h2>
      <p className="mb-4">{formatPrice(price)}</p>
      <p className="text-base">{description}</p>
    </section>
  );
}
