import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Translation {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  translation: Translation = {};
  private currentLang: 'br' | 'en' = 'br';

  constructor(private http: HttpClient) {
    this.loadTranslation(this.currentLang);
  }

  loadTranslation(lang: 'br' | 'en') {
    return this.http.get<Translation>(`/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translation = data;
        this.currentLang = lang;
      },
      error: (err) => {
        console.error(`Falha ao carregar tradução para "${lang}":`, err);
      },
    });
  }

  translate(key: string) {
    return this.translation[key] || key;
  }

  get currentLanguage() {
    return this.currentLang;
  }
}
