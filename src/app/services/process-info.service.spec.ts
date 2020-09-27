import { TestBed } from '@angular/core/testing';

import { ProcessInfoService } from './process-info.service';

describe('ProcessInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessInfoService = TestBed.get(ProcessInfoService);
    expect(service).toBeTruthy();
  });
});
