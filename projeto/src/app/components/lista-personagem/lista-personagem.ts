import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { Personagens } from '../../services/personagensService';
import { HttpClientModule } from '@angular/common/http';
interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  standalone: true,
  imports: [HttpClientModule],
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

  incremetarVotoPersonagem(id: number) {
    this.personagemService.votarPersonagem(id);
    this.carregarPersonagens();
  }
}
