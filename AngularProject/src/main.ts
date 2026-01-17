import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/* Load Material Web components (JS modules) here — do NOT import them from CSS */
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
