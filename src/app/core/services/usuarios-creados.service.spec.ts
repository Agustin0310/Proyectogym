import { TestBed } from '@angular/core/testing';

import { UsuariosCreadosService } from './usuarios-creados.service';

describe('UsuariosCreadosService', () => {
  let service: UsuariosCreadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosCreadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
