import { TestBed } from '@angular/core/testing';

import { AdminFromApiService } from './admin-from-api.service';

describe('AdminFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminFromApiService = TestBed.get(AdminFromApiService);
    expect(service).toBeTruthy();
  });
});
