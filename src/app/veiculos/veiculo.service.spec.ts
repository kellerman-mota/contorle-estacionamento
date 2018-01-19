/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VeiculoService } from './veiculo.service';

describe('VeiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculoService]
    });
  });

  it('should ...', inject([VeiculoService], (service: VeiculoService) => {
    expect(service).toBeTruthy();
  }));
});
