import { Component, Input, OnInit, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: '[aflac-notification-bar]',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit, OnChanges {

  @Input()
  status = 'info';

  @Input()
  isVisible:boolean = true;

  @Input()
  canClose = true;

  @Input()
  hasIcon = true;

  @Input()
  statusIcon = '';

  constructor(
    private _elem: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this._setVisibility();
    this._setStatus();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']) {
      this._setVisibility();
    }
  }

  private _setVisibility() {
    !!this.isVisible ? this._renderer.removeClass(this._elem.nativeElement, 'hide') : this._renderer.addClass(this._elem.nativeElement, 'hide');
  }

  private _setStatus() {
    switch (this.status) {
      case 'error': {
        this._renderer.addClass(this._elem.nativeElement, 'error');
        this.statusIcon = 'icon-error-blocker';
        break;
      }
      case 'success': {
        this._renderer.addClass(this._elem.nativeElement, 'success');
        this.statusIcon = 'icon-check-in-circle';
        break;
      }
      case 'info': {
        this._renderer.addClass(this._elem.nativeElement, 'info');
        this.statusIcon = 'icon-info';
        break;
      }
    }
  }

  onCloseBar() {
    this.isVisible = false;
    this._setVisibility();
  }
}
