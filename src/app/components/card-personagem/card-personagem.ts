import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card-personagem',
  imports: [RouterLink],
  templateUrl: './card-personagem.html',
  styleUrl: './card-personagem.css',
})
export class CardPersonagem {
  nome = input.required<string>();
  imagem = input.required<string>();
  totalVotos = input.required<number>();
  id = input.required<number>();

  votou = output<{id:number; totalVotos:number}>();

}
