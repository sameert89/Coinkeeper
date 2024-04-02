import { TestBed } from '@angular/core/testing';

import { DashboardDataLoaderService } from './dashboard-data-loader.service';

describe('DashboardDataLoaderService', () => {
  let service: DashboardDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
