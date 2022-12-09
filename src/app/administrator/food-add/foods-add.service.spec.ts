import { TestBed } from '@angular/core/testing';

import { FoodsAddService } from './foods-add.service';

describe('FoodsAddService', () => {
  let service: FoodsAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
