import { TestBed } from '@angular/core/testing';

import { TextAnalysisService } from './text-analysis.service';

describe('TextAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextAnalysisService = TestBed.get(TextAnalysisService);
    expect(service).toBeTruthy();
  });
});
