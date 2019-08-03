import { TestBed } from '@angular/core/testing';

import { ProductFromApiService } from './product-from-api.service';

describe('ProductFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFromApiService = TestBed.get(ProductFromApiService);
    expect(service).toBeTruthy();
  });
});
