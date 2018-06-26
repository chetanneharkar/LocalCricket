import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';

import { CategoryTO } from '../Model/CategoryTO';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import{getAllCategory,getSelectedCategoryChildData} from '../../Global';
import * as global from '../../Global';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  GetAllCategory() {
    debugger;
    return this.http.get<CategoryTO[]>(global.getSelectedCategoryChildData + 0);

  }

  GetSelectedCategoryChildData(parentId: number) {
    debugger;
    return this.http.get<CategoryTO[]>(global.getSelectedCategoryChildData + parentId);
  }

  AddCategory(categoryTO: CategoryTO): Observable<CategoryTO> {
    debugger;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post<CategoryTO>(global.PostCategoryData, JSON.stringify(categoryTO), options);
  }
}
