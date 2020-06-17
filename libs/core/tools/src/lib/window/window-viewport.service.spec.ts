import { TestBed } from '@angular/core/testing';
import { WindowViewportService } from './window-viewport.service';


const service = TestBed.inject<WindowViewportService>(WindowViewportService);

describe('WindowViewportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created getViewportRect', () => {

    expect(service.getViewportRect()).toBeTruthy();
  });
});
