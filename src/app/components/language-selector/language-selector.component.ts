import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  private readonly langService = inject(LanguageService);
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  currentLang = this.langService.currentLang;

  public onChangeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const language = target.value;

    this.langService.onChangeLanguage(language);
  }
}
