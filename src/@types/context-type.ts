export interface contextStore {
  products: productType[];
  product: productType;
  cart: productType[];
  event: {
    getProducts: () => Promise<void>;
    productToCart: (_product: productType) => void;
    getProduct: (id: number) => Promise<void>;
    handleDecrease: (id: number) => void;
    handleIncrease: (id: number) => void;
  };
}

export type productType = {
  id: number;
  price: number;
  category: string;
  description: string;
  title: string;
  image: string;
  amount: number;
  inCart: boolean;
  total: number;
};
