import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Kombiniere die Provider aus appConfig mit den zusätzlichen benötigten Providern
const combinedProviders = [
  ...appConfig.providers, // Routing und HttpClient von appConfig
  importProvidersFrom(
    // ngx-translate konfigurieren
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  )
];

// Anwendung mit kombinierten Providern bootstrappen
bootstrapApplication(AppComponent, {
  providers: combinedProviders
}).catch(err => console.error(err));