import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonagem } from './lista-personagem';

describe('ListaPersonagem', () => {
  let component: ListaPersonagem;
  let fixture: ComponentFixture<ListaPersonagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPersonagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPersonagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
