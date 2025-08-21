import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-personagem',
  imports: [],
  templateUrl: './detalhe-personagem.html',
  styleUrl: './detalhe-personagem.css'
})
export class DetalhePersonagem implements OnInit {

  idPersonagem: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPersonagem = Number(this.route.snapshot.paramMap.get('id'));
  }
}
