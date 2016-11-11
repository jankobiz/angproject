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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_vehicle_list_1 = require('./app.vehicle-list');
var app_selected_vehicle_1 = require('./app.selected-vehicle');
var app_vehicle_filter_pipe_1 = require('./app.vehicle-filter.pipe');
var app_simple_pipe_1 = require('./app.simple-pipe');
var app_vehicle_service_1 = require('./app.vehicle-service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [app_vehicle_list_1.VehicleList, app_vehicle_filter_pipe_1.MyPipe, app_selected_vehicle_1.VehicleComponent, app_simple_pipe_1.SimplePipe],
            providers: [app_vehicle_service_1.VehicleService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.vehicle-module.js.map