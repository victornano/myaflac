import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aflac-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()  
  disabled = false;

  @Input()  
  half = false;

  @Input()  
  primary = false;

  @Input()  
  secondary = false;

  constructor() { }

  ngOnInit() {

    if(!this.primary && !this.secondary){ this.primary = true;}
    if( this.primary ){ this.secondary = false }
    if( this.secondary ){ this.primary = false }

  }

}
