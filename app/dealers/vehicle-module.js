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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var vehicle_list_1 = require("./vehicle-list");
var dealers_list_1 = require("./dealers-list");
var selected_vehicle_1 = require("./selected-vehicle");
var vehicle_filter_pipe_1 = require("./vehicle-filter.pipe");
var simple_pipe_1 = require("./simple-pipe");
//import { HighlightDirective } from '../shared/highlight.directive';
var vehicle_service_1 = require("./vehicle-service");
var appRoutes = [
    { path: 'vehicles', component: vehicle_list_1.VehicleList },
    { path: 'dealers', component: dealers_list_1.DealersList }
];
var VehicleModule = (function () {
    function VehicleModule() {
    }
    return VehicleModule;
}());
VehicleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [vehicle_list_1.VehicleList, dealers_list_1.DealersList],
        declarations: [vehicle_list_1.VehicleList, dealers_list_1.DealersList, vehicle_filter_pipe_1.MyPipe, selected_vehicle_1.VehicleComponent, simple_pipe_1.SimplePipe],
        providers: [vehicle_service_1.VehicleService]
    }),
    __metadata("design:paramtypes", [])
], VehicleModule);
exports.VehicleModule = VehicleModule;
//# sourceMappingURL=vehicle-module.js.map