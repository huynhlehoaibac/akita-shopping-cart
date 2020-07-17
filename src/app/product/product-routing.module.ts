import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@layout/default-layout/default-layout.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: ListProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
