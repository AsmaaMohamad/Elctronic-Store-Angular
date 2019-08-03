import { TestBed } from '@angular/core/testing';

import { CategoryFromApiService } from './category-from-api.service';

describe('CategoryFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryFromApiService = TestBed.get(CategoryFromApiService);
    expect(service).toBeTruthy();
  });
});
