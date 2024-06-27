import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HashTableService {
  private baseUrl = 'http://localhost:8080/api/hashtable';

  constructor(private http: HttpClient) {}


  addWord(word: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/add`, null, { params: { name: word } });
  }

  removeWord(word: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove`, { params: { name: word } });
  }

  searchWord(word: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/contains`, { params: { name: word } });
  }

  getTable(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/print`);
  }

}
