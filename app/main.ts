import { bootstrap } from '@angular/platform-browser-dynamic';

import { MainApp } from './app.component';

bootstrap( MainApp )
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));