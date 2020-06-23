import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aflac-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.scss']
})
export class AlertBannerComponent implements OnInit {

  @Input()
  type = 'default';


  constructor() { }

  ngOnInit() {
  }

}
