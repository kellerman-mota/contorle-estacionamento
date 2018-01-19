/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatioService } from './patio.service';

describe('PatioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatioService]
    });
  });

  it('should ...', inject([PatioService], (service: PatioService) => {
    expect(service).toBeTruthy();
  }));
});
