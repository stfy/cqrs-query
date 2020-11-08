import { TestBed } from '@angular/core/testing';

import { CqrsQueryService } from './cqrs-query.service';

describe('CqrsQueryService', () => {
  let service: CqrsQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CqrsQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
