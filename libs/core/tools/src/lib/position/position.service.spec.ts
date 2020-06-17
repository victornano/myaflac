import { TestBed } from '@angular/core/testing';
import { PositionService } from './position.service';
import { Renderer2, ElementRef } from '@angular/core';

 let renderer: jasmine.SpyObj<Renderer2>;
 let elementRef: ElementRef;
 
class MockElementRef implements ElementRef {
  nativeElement = {
    getBoundingClientRect: function(){
      return {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      };
    }
  };
}

describe('PositionService', () => {
  beforeEach(() => {

    const rendererSpy = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle', 'removeClass', 'addClass']);

    TestBed.configureTestingModule({
      providers: [
        PositionService,
        {
          provide: Renderer2, useValue: rendererSpy
        },
        {
          provide: ElementRef, useValue: new MockElementRef()
        }
      ]
    })

    renderer = TestBed.get(Renderer2);
    elementRef = TestBed.get(ElementRef)
  });

  it('should be created', () => {
    const service: PositionService = TestBed.get(PositionService);
    expect(service).toBeTruthy();
  });

  it('can call #setQuadrantPosition', () => {
    const service: PositionService = TestBed.get(PositionService);
    expect(service.setQuadrantPosition(renderer, elementRef)).toBeTruthy();
  });
});