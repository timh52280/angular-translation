import { Component } from '@angular/core';
import { Language } from './interfaces/language';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent {
  languages: Language[] = [];
  selectedLanguage!: Language;
}
