import { TestBed } from '@angular/core/testing';

import { UserExistsService } from './user-exists.service';

describe('UserExistsService', () => {
  let service: UserExistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
