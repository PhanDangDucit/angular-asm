import { TestBed } from '@angular/core/testing';

import { ProductCardService } from '../src/services/product.service';

describe('ProductCardService', () => {
  let service: ProductCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
