import type { Metadata } from 'next';
import { getProductById, getProducts } from '@/api/products';
import { ProductDetails } from '@/ui/molecules/ProductDetails';

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

export async function generateStaticParams(): Promise<
  ProductPageProps['params'][]
> {
  const products = await getProducts({ pageNo: 1 });

  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailsPage({
  params: { productId },
}: ProductPageProps) {
  const product = await getProductById(productId);

  return (
    <div className="mx-auto max-w-xs sm:max-w-3xl md:max-w-4xl">
      <ProductDetails product={product} />
    </div>
  );
}
