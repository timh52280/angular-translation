import { Component } from '@angular/core';
import { LanguageOption } from './interfaces/language';
import { SelectButtonOptionClickEvent } from 'primeng/selectbutton';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent {

  constructor(private translate: TranslateService) {
    
  }

  languageOptions: LanguageOption[] = [{name: 'Español', code: 'es', flagIcon: 'fi fi-es'}, {name: 'English', code: 'en', flagIcon: 'fi fi-gb'}];

  defaultLanguageValue: string = 'es';

  onLanguageSelect(event: SelectButtonOptionClickEvent) {
    console.log(event.option?.code);
    this.translate.use(event.option?.code);
  }
}
