import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductsComponent } from './create-products/create-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'create-Product', component: CreateProductsComponent },
  // { path: 'list-Prducts', component: ViewAllProductsComponent },
  { path: 'category/:id', component: ViewAllProductsByCategoryComponent },
  { path: 'search-date', component: ViewAllProductsByDateComponent },
  { path: 'Product/:id', component: ViewProductComponent },
  { path: 'delete-Product/:id', component: DeleteProductComponent },
  { path: 'update-Product/:id', component: UpdateProductComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
