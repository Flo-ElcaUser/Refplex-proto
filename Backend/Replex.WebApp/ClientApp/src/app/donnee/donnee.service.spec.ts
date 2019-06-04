import { TestBed, inject } from '@angular/core/testing';

import { DonneeService } from './donnee.service';

describe('DonneeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonneeService]
    });
  });

  it('should be created', inject([DonneeService], (service: DonneeService) => {
    expect(service).toBeTruthy();
  }));
});
