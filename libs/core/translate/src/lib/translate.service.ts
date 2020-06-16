import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateLangService {

  private langChange = new BehaviorSubject<any>([]);

  _currentLang = '';

  constructor(
    private translate: TranslateService
  ) { }

  setCurrentLang(val){
    this._currentLang = val;
  }

  getCurrentLang(){
    return this._currentLang;
  }

  setInitialAppLang(val){
    this.translate.setDefaultLang(val);
  }


  changeLang($lang){
    this._currentLang = $lang;
    this.langChange.next(this._currentLang);
  }

  langChange$() {
    return this.langChange
      .asObservable()
      .pipe(filter(lang => lang !== null))
      .pipe(distinctUntilChanged());
  }


}
