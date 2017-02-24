"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
//import { VehicleList } from './vehicles/app.vehicle-list';
//import { VehicleComponent } from './vehicles/app.selected-vehicle';
//import { MyPipe } from './vehicles/app.vehicle-filter.pipe';
//import { SimplePipe } from './vehicles/app.simple-pipe';
//import { VehicleService } from './vehicles/app.vehicle-service';
var highlight_directive_1 = require("./shared/highlight.directive");
/* Feature Modules */
var vehicle_module_1 = require("./vehicles/vehicle-module");
var dealer_module_1 = require("./dealers/dealer-module");
var appRoutes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes),
            vehicle_module_1.VehicleModule,
            dealer_module_1.DealerModule
        ],
        declarations: [
            app_component_1.MainApp,
            highlight_directive_1.HighlightDirective,
            welcome_component_1.WelcomeComponent
        ],
        //providers: [ VehicleService ],
        bootstrap: [app_component_1.MainApp]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map