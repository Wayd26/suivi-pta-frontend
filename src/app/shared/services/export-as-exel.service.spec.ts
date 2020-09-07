import { TestBed } from '@angular/core/testing';

import { ExportAsExelService } from './export-as-exel.service';

describe('ExportAsExelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportAsExelService = TestBed.get(ExportAsExelService);
    expect(service).toBeTruthy();
  });
});
