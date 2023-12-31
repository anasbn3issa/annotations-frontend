import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private readonly apiUrl = 'http://localhost:8000/api/label/';

  constructor(private http: HttpClient) { }

  addLabel(name: string): Observable<any> {
    const body = { name };

    return this.http.post<any>(this.apiUrl, body);
  }

  getLabels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
