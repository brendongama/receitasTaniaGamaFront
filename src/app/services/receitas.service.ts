import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receitas } from '../models/receita';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient) { }

  listAll(): Observable<Receitas[]> {
    return this.http.get<Receitas[]>(`${API_CONFIG.baseUrl}/receita`);
  }

  listId(id: any): Observable<Receitas> {
    return this.http.get<Receitas>(`${API_CONFIG.baseUrl}/receita/${id}`);
  }

  create(pedido: Receitas): Observable<Receitas> {
    return this.http.post<Receitas>(`${API_CONFIG.baseUrl}/receita`, pedido);
  }
}
