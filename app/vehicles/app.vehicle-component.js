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
var app_service_1 = require('./app.service');
var app_selected_vehicle_1 = require('./app.selected-vehicle');
var AppVehicle = (function () {
    function AppVehicle(_vehicleServis) {
        this._vehicleServis = _vehicleServis;
        this.selected = new core_1.EventEmitter();
        this.timesClicked = 0;
        this.inputtext = 'This is default text';
        this.anothertext = 'Another default text';
        this.messages = [];
        this.divcolor = "white";
        this.bckdivcolor = "darkred";
        this.title = 'Angular 2 Binding Events';
        this.vehicles = this._vehicleServis.getVehicles();
    }
    AppVehicle.prototype.log = function (msg, data) {
        this.timesClicked += 1;
        this.messages.splice(0, 0, msg + " " + this.timesClicked);
        console.log(msg);
        if (data) {
            console.log(data);
        }
    };
    AppVehicle.prototype.getVihacles = function () {
        var _this = this;
        this._vehicleServis.getVehiclesPromise().then(function (vehicles) { return _this.vehicles = vehicles; });
    };
    AppVehicle.prototype.OnInit = function () {
        this.getVihacles;
    };
    AppVehicle.prototype.select = function (selectedVihacle) {
        this.selectedVehicle = selectedVihacle;
        //this.selected.emit(selectedVihacle);
        console.log("Clicked on a vehicle " + selectedVihacle.model);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppVehicle.prototype, "selected", void 0);
    AppVehicle = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.vehicle-component.html',
            styleUrls: ['./app/app.vehicle.component.css'],
            directives: [app_selected_vehicle_1.VehicleComponent],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppVehicle);
    return AppVehicle;
}());
exports.AppVehicle = AppVehicle;
//# sourceMappingURL=app.vehicle-component.js.map