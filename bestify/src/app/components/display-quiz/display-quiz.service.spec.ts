import { TestBed } from '@angular/core/testing';

import { DisplayQuizService } from './display-quiz.service';

describe('DisplayQuizService', () => {
  let service: DisplayQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
