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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_vehicle_list_1 = require('./app.vehicle-list');
var app_selected_vehicle_1 = require('./app.selected-vehicle');
var app_custom_pipe_1 = require('./app.custom-pipe');
var app_simple_pipe_1 = require('./app.simple-pipe');
var VehicleModule = (function () {
    function VehicleModule() {
    }
    VehicleModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [app_vehicle_list_1.VehicleList, app_custom_pipe_1.MyPipe, app_selected_vehicle_1.VehicleComponent, app_simple_pipe_1.SimplePipe],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], VehicleModule);
    return VehicleModule;
}());
exports.VehicleModule = VehicleModule;
//# sourceMappingURL=app.vehicle-module.js.map