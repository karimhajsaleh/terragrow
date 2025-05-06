import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParcelleService {
  private apiUrl = 'http://localhost:3000/parcelles';

  constructor(private http: HttpClient) {}

  createParcelle(parcelle: any): Observable<any> {
    return this.http.post(this.apiUrl, parcelle);
  }

  getParcelles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBandes(parcelleId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${parcelleId}/bandes`);
  }
}