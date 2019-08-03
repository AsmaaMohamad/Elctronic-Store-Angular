import { TestBed } from '@angular/core/testing';

import { StorageAdminService } from './storage-admin.service';

describe('StorageAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageAdminService = TestBed.get(StorageAdminService);
    expect(service).toBeTruthy();
  });
});
