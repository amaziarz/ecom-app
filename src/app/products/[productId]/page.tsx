import type { Metadata } from 'next';
import { getProductById } from '@/api/products';
import { ProductImage } from '@/ui/atoms/ProductImage';
import { ProductDetailedDescription } from '@/ui/atoms/ProductDetailedDescription';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({
  params: { productId },
}: ProductPageProps): Promise<Metadata> {
  const { title, description } = await getProductById(productId);

  return {
    title,
    description,
  };
}

export default async function ProductDetailsPage({
  params: { productId },
}: ProductPageProps) {
  const product = await getProductById(productId);

  return (
    <div className="mx-auto max-w-xs sm:max-w-3xl">
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 ">
        <ProductImage src={product.image} alt={product.title} />
        <ProductDetailedDescription product={product} />
      </article>
    </div>
  );
}
