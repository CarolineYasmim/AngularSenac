import { Routes } from '@angular/router';
import { ListaPersonagem } from './components/lista-personagem/lista-personagem';
import { CardPersonagem } from './components/card-personagem/card-personagem';

export const routes: Routes = [
{
    path: '',
    component: ListaPersonagem,
}
{
    path: '/home',
    component: CardPersonagem,
},
{
    path: '/personagens/:id',
    component: ListaPersonagem,
},

];
