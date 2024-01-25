import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5081/api/QuranData'; // Replace with your API URL

  constructor(private httpClient: HttpClient) { }

  getAllQuranData(limit: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/GetAllQuranData?limit=${limit}`);
  }

  getSurahList(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/SurahList`);
  }

  getSurahData(surahId:number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/SurahText/${surahId}`);
  }
}
