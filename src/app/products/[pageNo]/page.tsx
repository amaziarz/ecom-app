import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { getProducts } from '@/api/products';
import { ProductList } from '@/ui/organisms/ProductList';
import { ProductListPagination } from '@/ui/organisms/ProductListPagination';

interface ProductsPageProps {
  params: {
    pageNo: string;
  };
}

export const metadata: Metadata = {
  title: 'Products',
};

export async function generateStaticParams(): Promise<
  ProductsPageProps['params'][]
> {
  return Array.from({ length: 5 }, (_, i) => ({
    pageNo: `${i + 1}`,
  }));
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const pageNo = parseInt(params.pageNo);
  if (Number.isNaN(pageNo)) {
    redirect('/products/1');
  }
  const products = await getProducts({ pageNo });

  return (
    <>
      <div className="mb-6">
        <ProductList products={products} />
      </div>
      <div className="flex justify-center">
        <ProductListPagination currentPage={pageNo} />
      </div>
    </>
  );
}
