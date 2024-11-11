import { TestBed } from '@angular/core/testing';

import { EnviarProyectoService } from './enviar-proyecto.service';

describe('EnviarProyectoService', () => {
  let service: EnviarProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
