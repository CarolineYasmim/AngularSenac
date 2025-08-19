import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personagens } from '../../services/personagensService';
import { CardPersonagem } from "../card-personagem/card-personagem";
interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  standalone: true,
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem implements OnInit, OnDestroy {
  personagens: IPersonagem[] = []

  carregarPersonagens() {
    this.personagemService.getPersonagens().subscribe((respostaDaAPI) => {
      this.personagens = respostaDaAPI;
    });
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.carregarPersonagens();
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }

  constructor(private personagemService: Personagens) {
    this.carregarPersonagens();
  }

  incremetarVotoPersonagem(evento:{id:number; totalVotos:number}) {
    this.personagemService.votarPersonagem(evento.id, evento.totalVotos);
    this.carregarPersonagens();
  }
}
