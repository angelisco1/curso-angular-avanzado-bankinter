import { TestBed } from '@angular/core/testing';

import { DigimonsService } from './digimons.service';

describe('DigimonsService', () => {
  let service: DigimonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
