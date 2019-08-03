import { TestBed } from '@angular/core/testing';

import { OrderFromApiService } from './order-from-api.service';

describe('OrderFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderFromApiService = TestBed.get(OrderFromApiService);
    expect(service).toBeTruthy();
  });
});
