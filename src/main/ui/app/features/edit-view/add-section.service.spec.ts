import { TestBed, inject } from '@angular/core/testing';

import { AddSectionService } from './add-section.service';

describe('AddSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSectionService]
    });
  });

  it('should be created', inject([AddSectionService], (service: AddSectionService) => {
    expect(service).toBeTruthy();
  }));
});
