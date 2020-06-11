import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../Models/Products';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'https://shopweb.azurewebsites.net/api/product';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Product[]> {
    const data = this.http.get<Product[]>(this.url).pipe();
    return data;
  }
}


