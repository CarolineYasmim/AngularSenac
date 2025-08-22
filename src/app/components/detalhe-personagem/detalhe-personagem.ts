import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersonagem, Personagens } from '../../services/personagensService';

@Component({
  selector: 'app-detalhe-personagem',
  imports: [],
  templateUrl: './detalhe-personagem.html',
  styleUrl: './detalhe-personagem.css'
})
export class DetalhePersonagem implements OnInit {

  idPersonagem: number = 0;
  personagem?: IPersonagem;

  constructor(private route: ActivatedRoute, private personagemService: Personagens) { }

  ngOnInit(): void {
    this.idPersonagem = Number(this.route.snapshot.paramMap.get('id'));
    this.personagemService.getPersonagemPorId(this.idPersonagem).subscribe((personagem) => {
      this.personagem = personagem;
    });
  }
}
