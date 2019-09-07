import { TestBed } from '@angular/core/testing';

import { SuiviTacheService } from './suivi-tache.service';

describe('SuiviTacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuiviTacheService = TestBed.get(SuiviTacheService);
    expect(service).toBeTruthy();
  });
});
