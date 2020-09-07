import { TestBed } from '@angular/core/testing';

import { SourceFinancementService } from './source-financement.service';

describe('SourceFinancementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceFinancementService = TestBed.get(SourceFinancementService);
    expect(service).toBeTruthy();
  });
});
