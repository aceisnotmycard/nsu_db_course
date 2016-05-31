import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

import 'rxjs/Rx';

if (true) {
  enableProdMode();
}

bootstrap(AppComponent);
