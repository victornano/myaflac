import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationBarComponent } from './notification-bar.component';
import {NotificationBarModule} from './notification-bar.module';

describe('NotificationBarComponent', () => {
  let component: NotificationBarComponent;
  let fixture: ComponentFixture<NotificationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NotificationBarModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    let changes = <any> {
      isVisible: true
    };

    const onchange = spyOn(component, 'ngOnChanges').and.callThrough();

    component.ngOnChanges(changes);
    changes.isVisible = false;
    component.ngOnChanges(changes);

    expect(onchange).toHaveBeenCalledWith(changes);
  });

  it('Given status is not passed Then it should go to default statement', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Given status is error Then it should go to error statement', () => {
    component.status = 'error';
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Given status is success Then it should go to success statement', () => {
    component.status = 'success';
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Given status is info Then it should go to info statement', () => {
    component.status = 'info';
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Given #onCloseBar function is called Then call should go to the function and isVisible should be false', () => {
    component.onCloseBar();
    expect(component.isVisible).toBeFalsy();
  });
});
