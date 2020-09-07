import { TestBed } from '@angular/core/testing';

import { SousActionService } from './sous-action.service';

describe('SousActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SousActionService = TestBed.get(SousActionService);
    expect(service).toBeTruthy();
  });
});
