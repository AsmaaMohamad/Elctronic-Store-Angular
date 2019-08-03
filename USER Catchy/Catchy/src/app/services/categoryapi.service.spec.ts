import { TestBed } from '@angular/core/testing';

import { CategoryapiService } from './categoryapi.service';

describe('CategoryapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryapiService = TestBed.get(CategoryapiService);
    expect(service).toBeTruthy();
  });
});
