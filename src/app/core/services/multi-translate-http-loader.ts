import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class MultiTranslateHttpLoader implements TranslateLoader {
    constructor(private http: HttpClient, private prefix: string = './assets/i18n/', private suffix: string = '.json') { }

    getTranslation(lang: string): Observable<any> {
        const pages = [
            'shared',
            'forms',
            'home',
            'contactus',
            'services',
            'about-us',
            'common'
        ];
        const requests = pages.map(page => this.http.get(`${this.prefix}${lang}/${page}${this.suffix}`));

        return forkJoin(requests).pipe(
            map(translationsArray => translationsArray.reduce((acc, translations) => ({ ...acc, ...translations }), {}))
        );
    }
}
