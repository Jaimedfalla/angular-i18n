import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  cookie = inject(SsrCookieService);
  translateService = inject(TranslateService);
  langServer = inject(SERVER_LANG_TOKEN, { optional: true });
  currentLang = signal<string>(this.langServer ?? 'en');

  onChangeLanguage(lang: string): void {
    this.cookie.set('lang', lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.currentLang.set(lang);
  }
}
