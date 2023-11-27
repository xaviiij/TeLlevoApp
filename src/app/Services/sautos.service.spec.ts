import { TestBed } from '@angular/core/testing';

import { SAutosService } from './sautos.service';

describe('SAutosService', () => {
  let service: SAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
