import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from  '@angular/router';

import { MainApp } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
//import { VehicleList } from './vehicles/app.vehicle-list';
//import { VehicleComponent } from './vehicles/app.selected-vehicle';
//import { MyPipe } from './vehicles/app.vehicle-filter.pipe';
//import { SimplePipe } from './vehicles/app.simple-pipe';

//import { VehicleService } from './vehicles/app.vehicle-service';

import { HighlightDirective } from './shared/highlight.directive';

/* Feature Modules */
import { VehicleModule } from './vehicles/vehicle-module';
import { DealerModule } from './dealers/dealer-module';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        VehicleModule,
        DealerModule 
    ],
    declarations: [
        MainApp,
        HighlightDirective,
        WelcomeComponent        
        //VehicleList,
        //MyPipe,
        //VehicleComponent,
        //SimplePipe
        
    ],
    //providers: [ VehicleService ],
    bootstrap: [ MainApp ]
})

export class AppModule {

}