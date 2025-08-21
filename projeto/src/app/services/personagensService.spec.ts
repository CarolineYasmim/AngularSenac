import { TestBed } from '@angular/core/testing';

import * as personagensService from './personagensService';

describe('PersonagensService', () => {
  let service: personagensService.Personagens;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(personagensService.Personagens);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});