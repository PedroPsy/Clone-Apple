import {images} from "../assets/images";
export interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
}

export const PRODUCTS: Product[] = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    description: "O iPhone definitivo. Design em titânio.",
    image: images.iphone17pro,
  },
  {
    id: "iphone-air",
    name: "iPhone Air",
    description: "Uma nova câmera de 48 MP.",
    image: images.iphoneair,
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    description: "Design clássico. Potência incrível.",
    image: images.iphone17,
  },
];