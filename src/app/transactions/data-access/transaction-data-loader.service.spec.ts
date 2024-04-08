import { TestBed } from '@angular/core/testing';

import { TransactionDataLoaderService } from './transaction-data-loader.service';

describe('TransactionDataLoaderService', () => {
  let service: TransactionDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
