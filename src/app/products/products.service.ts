import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from './product-interface';
import { CategoryInterface } from '../site-framework/category-interface'



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any):Observable<ProductInterface> {
    const productUrl='http://localhost:3000/products';
    return this.httpClient.post<ProductInterface>(productUrl,productBody);
  }

  ViewProduct(productId: any):Observable<ProductInterface>{
    const productUrl='http://localhost:3000/products?productId='+productId;
    return this.httpClient.get<ProductInterface>(productUrl);
  }

  UpdateProduct(productId: any, productBody: any):Observable<ProductInterface>{
    const productUrl='http://localhost:3000/products/'+productId;
    return  this.httpClient.put<ProductInterface>(productUrl, productBody);
  }

  DeleteProduct(productId: any):Observable<ProductInterface>{
    const productUrl='http://localhost:3000/products/'+productId;
    return this.httpClient.delete<ProductInterface>(productUrl);
  }

  SearchProductCategory(categoryId: any):Observable<ProductInterface>{
    const productUrl='http://localhost:3000/products?CategoryId='+categoryId;
    return this.httpClient.get<ProductInterface>(productUrl);
  }
  SearchProductDate(dateParam: Date):Observable<ProductInterface>{
    const productUrl='http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<ProductInterface>(productUrl);
  }
  getCategories():Observable<CategoryInterface>{
    const categoryUrl='http://localhost:3000/categories';
     return this.httpClient.get<CategoryInterface>(categoryUrl)
  }
  getAllProducts():Observable<ProductInterface>{
    const productUrl='http://localhost:3000/products';
     return this.httpClient.get<ProductInterface>(productUrl);
  }
}
