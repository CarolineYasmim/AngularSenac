import { Injectable, OnDestroy, OnInit } from '@angular/core';
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



  votarPersonagem(id: number) {
   return this.httpClient.patch(`${this.baseUrl}/personagens/${id}`, {votos:10});
  }

  metodoQualquer(){
    return this.httpClient.delete(`${this.baseUrl}`).subscribe({
      next: () => {
        console.log('Deu certo');
      },
      error: (err) => {
        console.log('Deu errado');
      },
      complete: () => {
        console.log('Completado');
      }
    })
  }






}
