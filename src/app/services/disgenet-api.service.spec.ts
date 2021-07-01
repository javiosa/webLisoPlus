import { TestBed } from '@angular/core/testing';

import { DisgenetAPIService } from './disgenet-api.service';

describe('DisgenetAPIService', () => {
  let service: DisgenetAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisgenetAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
