import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private languageChange$ = new BehaviorSubject<void>(undefined);

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.onLangChange.subscribe(() => this.languageChange$.next());
  }

  onLanguageChange(): Observable<void> {
    return this.languageChange$.asObservable();
  }

  /**
   * Load translations for a specific page dynamically
   * @param page Page name
   */
  loadPageTranslations(page: string): Promise<any> {
    const lang = this.translate.currentLang || 'en';
    const pagePath = `./assets/i18n/${lang}/${page}.json`;

    return this.http.get(pagePath).toPromise().then((translations: any) => {
      this.translate.setTranslation(lang, translations, true);
      return translations;
    }).catch(() => {
      console.error(`Failed to load translations for page: ${page}`);
      return {};
    });

  }
}
