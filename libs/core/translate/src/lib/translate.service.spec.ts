import { TestBed } from '@angular/core/testing';

import { TranslateLangService } from './translate.service';

describe('TranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateLangService = TestBed.get(TranslateLangService);
    expect(service).toBeTruthy();
  });
});
