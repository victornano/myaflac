import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aflac-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input()
  tabs: Array<any>;

  activeIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleTab($index){
    this.activeIndex = $index;
    // register action
  }

  isActive($index){
    if($index === this.activeIndex){ return true;}
  }

}
