import { TestBed } from '@angular/core/testing';

import { StoaregeCartService } from './stoarege-cart.service';

describe('StoaregeCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoaregeCartService = TestBed.get(StoaregeCartService);
    expect(service).toBeTruthy();
  });
});
