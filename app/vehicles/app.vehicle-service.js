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
var app_mock_vehicles_1 = require("./app.mock-vehicles");
var http_1 = require("@angular/http");
var VehicleService = (function () {
    function VehicleService(_http) {
        this._http = _http;
        this.getVehicles1 = function () { return [
            { id: 1, name: 'X-Wing Fighter' },
            { id: 2, name: 'Tie Fighter' },
            { id: 3, name: 'Y-Wing Fighter' }
        ]; };
    }
    VehicleService.prototype.getVehicles = function () {
        return app_mock_vehicles_1.VEHICLES;
    };
    VehicleService.prototype.getVehiclesPromise = function () {
        return Promise.resolve(app_mock_vehicles_1.VEHICLES);
    };
    return VehicleService;
}());
VehicleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VehicleService);
exports.VehicleService = VehicleService;
//# sourceMappingURL=app.vehicle-service.js.map