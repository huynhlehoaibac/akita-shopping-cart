export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export function createProduct(params: Partial<Product>) {
  return {} as Product;
}
