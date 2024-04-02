import { TestBed } from '@angular/core/testing';

import { SpeechDataInterpreterWebService } from './speech-data-interpreter-web.service';

describe('SpeechDataInterpreterWebService', () => {
  let service: SpeechDataInterpreterWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechDataInterpreterWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
