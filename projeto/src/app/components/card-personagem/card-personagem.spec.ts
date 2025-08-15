import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonagem } from './card-personagem';

describe('CardPersonagem', () => {
  let component: CardPersonagem;
  let fixture: ComponentFixture<CardPersonagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
