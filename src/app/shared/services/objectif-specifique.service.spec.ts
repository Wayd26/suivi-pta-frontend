import { TestBed } from '@angular/core/testing';

import { ObjectifSpecifiqueService } from './objectif-specifique.service';

describe('ObjectifSpecifiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectifSpecifiqueService = TestBed.get(ObjectifSpecifiqueService);
    expect(service).toBeTruthy();
  });
});
