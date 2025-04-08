import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTAR

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule) // ✅ REGISTRAR O FORMSMODULE
  ]
};
