import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { Personagens } from '../../services/personagensService';
interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem {
  personagens: IPersonagem[] = []

  constructor(private personagemService: Personagens) {
      this.personagens = this.personagemService.getPersonagensService();
    }

    incremetarVotoPersonagem(id: number) {
      this.personagemService.votarPersonagem(id);
    }
}
