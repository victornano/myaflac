import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aflac-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {

  @Input()
  steps: Array<any>;

  activeIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleStep($index){
    this.activeIndex = $index;
    // register action
  }

  isActive($index){
    // Temporary adjustments, needs more logic to account for processed step
    if( $index === 0 || $index === 1 ){ return true;}
  }

  hasIcon($index){
    if( this.steps[$index].icon !== '' ){
      return true
    }
  }

}
