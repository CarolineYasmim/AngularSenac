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

  constructor(private http: HttpClient) {
    this.getPersonagens()
  }


  getPersonagens() {
    return this.http.get('http://localhost:3000/personagens').subscribe((res: IPersonagem[]) => {});
  }



    votarPersonagem(id: number) {
     
    }




  }
