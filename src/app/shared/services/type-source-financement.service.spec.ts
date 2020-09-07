import { TestBed } from '@angular/core/testing';

import { TypeSourceFinancementService } from './type-source-financement.service';

describe('TypeSourceFinancementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeSourceFinancementService = TestBed.get(TypeSourceFinancementService);
    expect(service).toBeTruthy();
  });
});
