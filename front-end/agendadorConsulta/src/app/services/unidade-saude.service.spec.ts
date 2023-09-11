import { TestBed } from '@angular/core/testing';

import { UnidadeSaudeService } from './unidade-saude.service';

describe('UnidadeSaudeService', () => {
  let service: UnidadeSaudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeSaudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
