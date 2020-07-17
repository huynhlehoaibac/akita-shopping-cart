import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductState extends EntityState<Product> {}

@Injectable()
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super();
  }
}
