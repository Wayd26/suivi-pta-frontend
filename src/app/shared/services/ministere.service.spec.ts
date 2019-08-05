import { TestBed } from '@angular/core/testing';

import { MinistereService } from './ministere.service';

describe('MinistereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinistereService = TestBed.get(MinistereService);
    expect(service).toBeTruthy();
  });
});
