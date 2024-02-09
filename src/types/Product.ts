export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: {
    src: string;
    alt: string;
  };
}
