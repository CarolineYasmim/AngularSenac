import { Component } from '@angular/core';
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

  ngOnInit() {
    console.log('ngOnInit');
    this.personagens = this.personagemService.getPersonagens();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  constructor(private personagemService: Personagens) {
    this.personagemService.getPersonagens().subscribe((personagens) => {
      this.personagens = personagens;
    });
  }

  incremetarVotoPersonagem(id: number) {
    this.personagemService.votarPersonagem(id);
  }
}
