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
var forms_1 = require('@angular/forms');
var vehicle_list_1 = require('./vehicle-list');
var selected_vehicle_1 = require('./selected-vehicle');
var custom_pipe_1 = require('./custom-pipe');
var simple_pipe_1 = require('./simple-pipe');
var vehicle_service_1 = require('./vehicle-service');
var VehicleModule = (function () {
    function VehicleModule() {
    }
    VehicleModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [
                vehicle_list_1.VehicleList,
                custom_pipe_1.MyPipe,
                selected_vehicle_1.VehicleComponent,
                simple_pipe_1.SimplePipe
            ],
            providers: [
                vehicle_service_1.AppService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VehicleModule);
    return VehicleModule;
}());
exports.VehicleModule = VehicleModule;
//# sourceMappingURL=vehicle-module.js.map