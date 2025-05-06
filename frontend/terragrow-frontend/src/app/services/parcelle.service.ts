import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParcelleService {
  private apiUrl = 'http://localhost:3000/parcelles'; // URL de base de l'API backend

  constructor(private http: HttpClient) {}

  // Méthode pour créer une nouvelle parcelle
  createParcelle(parcelle: any): Observable<any> {
    return this.http.post(this.apiUrl, parcelle);
  }

  // Méthode pour récupérer toutes les parcelles
  getParcelles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Méthode pour récupérer les bandes d'une parcelle spécifique
  getBandes(parcelleId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${parcelleId}/bandes`);
  }
}