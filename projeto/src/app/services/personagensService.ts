import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root'
})

export class Personagens {
  private personagens: IPersonagem[] = [];

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000';


  getPersonagens(): Observable<IPersonagem[]> {
    return this.httpClient.get<IPersonagem[]>(`${this.baseUrl}/personagens`);
  }


  votarPersonagem(id: number, totalVotos: number) {
   return this.httpClient.patch(`${this.baseUrl}/personagens/${id}`, {votos: totalVotos+1});
  }
}
