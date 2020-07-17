import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>('/api/products');
  }

  searchProducts(keyword: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`/api/products?name=${keyword}`);
  }
}
