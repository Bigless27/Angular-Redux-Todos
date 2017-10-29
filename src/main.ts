import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './assets/css/alignment.css';
import './assets/css/colors.css';
import './assets/css/buttons.css';
import './assets/css/inputs.css';

// Enables HMR
declare var module: any;
if (module.hot) {
  module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
