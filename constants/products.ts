export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    description: "O iPhone definitivo. Design em titânio.",
    image: "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__f4p0p0xk6w2y_large.png",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    description: "Uma nova câmera de 48 MP.",
    image: "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15__e0tw6kz6l4ya_large.png",
  },
  {
    id: "iphone-se",
    name: "iPhone SE",
    description: "Design clássico. Potência incrível.",
    image: "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_se__cuaa2bdndqeu_large.png",
  },
];