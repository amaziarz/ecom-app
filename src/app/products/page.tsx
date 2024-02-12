import type { Product } from '@/types/Product';
import { ProductList } from '@/ui/organisms/ProductList';

const products: Product[] = [
  {
    id: '1',
    name: 'Bottle',
    category: 'Cat 1',
    price: 1000,
    image: {
      src: '/img/bottle.jpg',
      alt: 'bottle',
    },
  },
  {
    id: '2',
    name: 'Camera',
    category: 'Cat 2',
    price: 1000,
    image: {
      src: '/img/camera.jpg',
      alt: 'camera',
    },
  },
  {
    id: '3',
    name: 'Pen',
    category: 'Cat 3',
    price: 1000,
    image: {
      src: '/img/pen.jpg',
      alt: 'pen',
    },
  },
  {
    id: '4',
    name: 'Watch',
    category: 'Cat 4',
    price: 1000,
    image: {
      src: '/img/watch.jpg',
      alt: 'watch',
    },
  },
];

export default function ProductsPage() {
  return <ProductList products={products} />;
}
