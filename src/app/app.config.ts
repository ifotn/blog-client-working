import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// add service & required dependency for server api calls
import { BlogService } from './services/blog.service';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), BlogService, provideHttpClient()]
};
