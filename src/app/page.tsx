import type { Product } from '@/types/Product';
import { ProductList } from '@/ui/organisms/ProductList';

const products: Product[] = [
  {
    id: '1',
    name: 'Butelka',
    category: 'Kat 1',
    price: 1000,
    image: {
      src: '/img/bottle.jpg',
      alt: 'butelka',
    },
  },
  {
    id: '2',
    name: 'Aparat',
    category: 'Kat 2',
    price: 1000,
    image: {
      src: '/img/camera.jpg',
      alt: 'aparat',
    },
  },
  {
    id: '3',
    name: 'Długopis',
    category: 'Kat 3',
    price: 1000,
    image: {
      src: '/img/pen.jpg',
      alt: 'długopis',
    },
  },
  {
    id: '4',
    name: 'Zegarek',
    category: 'Kat 4',
    price: 1000,
    image: {
      src: '/img/watch.jpg',
      alt: 'zegarek',
    },
  },
];

export default function Home() {
  return <ProductList products={products} />;
}
