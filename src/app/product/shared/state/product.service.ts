import { Injectable } from '@angular/core';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { ProductState, ProductStore } from './product.store';

@NgEntityServiceConfig({
  resourceName: 'products',
})
@Injectable()
export class ProductService extends NgEntityService<ProductState> {
  constructor(protected store: ProductStore) {
    super(store);
  }

  search(keyword: string) {
    return this.get({ params: [{ name: keyword }] });
  }
}
