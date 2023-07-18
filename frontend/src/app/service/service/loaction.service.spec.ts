import { TestBed } from '@angular/core/testing';

import { LoactionService } from './loaction.service';

describe('LoactionService', () => {
  let service: LoactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
