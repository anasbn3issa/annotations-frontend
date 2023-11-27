import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private readonly clearDBurl = 'http://127.0.0.1:8000/api/clear-database/';
  private readonly clearAnnotationsUrl = 'http://127.0.0.1:8000/api/clear-annotations/';


  constructor(private http: HttpClient) { }

  clearDatabase(): Observable<any> {
    return this.http.post(this.clearDBurl, {});
  }

  clearAnnotations(): Observable<any> {
    return this.http.post(this.clearAnnotationsUrl, {});
  }

}
