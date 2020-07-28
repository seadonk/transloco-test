import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'test-app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  selectedLang = 'en';
  availableLangs = [];

  constructor(private translocoService: TranslocoService) {
    this.availableLangs = translocoService.getAvailableLangs().sort((a,b) => a < b ? -1 : 1);
    this.selectedLang = translocoService.getActiveLang();
  }

  onLangChange = newLang => this.translocoService.setActiveLang(newLang);
}
