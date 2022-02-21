import { TestBed } from '@angular/core/testing';

import { MiRouterService } from './mi-router.service';

describe('MiRouterService', () => {
  let service: MiRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
