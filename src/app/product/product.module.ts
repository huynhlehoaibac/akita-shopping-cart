import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { LayoutModule } from '@layout/layout.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from 'src/environments/environment';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { ProductQuery } from './shared/state/product.query';
import { ProductStore } from './shared/state/product.store';
import { ProductService } from './shared/state/product.service';

@NgModule({
  declarations: [ProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService, {
          delay: 100,
        }),
    ClarityModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: '/api',
      },
    },
    ProductQuery,
    ProductStore,
    ProductService,
  ],
})
export class ProductModule {}
