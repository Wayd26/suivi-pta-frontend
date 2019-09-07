import { TestBed } from '@angular/core/testing';

import { IndicateurService } from './indicateur.service';

describe('IndicateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicateurService = TestBed.get(IndicateurService);
    expect(service).toBeTruthy();
  });
});
