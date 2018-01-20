/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermanenciaService } from './permanencia.service';

describe('PermanenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermanenciaService]
    });
  });

  it('should ...', inject([PermanenciaService], (service: PermanenciaService) => {
    expect(service).toBeTruthy();
  }));
});
