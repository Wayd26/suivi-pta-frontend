import { TestBed } from '@angular/core/testing';

import { ExercieService } from './exercie.service';

describe('ExercieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercieService = TestBed.get(ExercieService);
    expect(service).toBeTruthy();
  });
});
