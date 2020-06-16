import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { TranslateLangService } from '@aflac/core/translate';

@Component({
  selector: 'aflac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentClass = 'native'
  showMenu = false;
  slideUp = false;

  constructor(
    private __translate: TranslateService,
    private __translateService: TranslateLangService
  ) { }

  ngOnInit() {
    this.__translate.setDefaultLang('en');
  }

  onToggleMenu(){
    this.showMenu = !this.showMenu;
  }

  onSlideMenuToggle() {
    this.slideUp =!this.slideUp;
  }

  onChangeLang(val){
    this.__translateService.setCurrentLang(val);
    this.__translate.use(val);
    this.__translateService.changeLang(val);
  }

}
