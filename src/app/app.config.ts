import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()] // Add provideHttpClient
};
