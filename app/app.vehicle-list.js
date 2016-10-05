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
var VehicleList = (function () {
    function VehicleList(_vehicleServis) {
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
    VehicleList.prototype.log = function (msg, data) {
        this.timesClicked += 1;
        this.messages.splice(0, 0, msg + " " + this.timesClicked);
        console.log(msg);
        if (data) {
            console.log(data);
        }
    };
    VehicleList.prototype.getVihacles = function () {
        var _this = this;
        this._vehicleServis.getVehiclesPromise().then(function (vehicles) { return _this.vehicles = vehicles; });
    };
    VehicleList.prototype.OnInit = function () {
        this.getVihacles;
    };
    VehicleList.prototype.select = function (selectedVihacle) {
        this.selectedVehicle = selectedVihacle;
        this.selected.emit(selectedVihacle);
        console.log("Clicked on a vehicle " + selectedVihacle.model);
    };
    VehicleList.prototype.onVehicleselected = function (message) {
        //this.title = 'Product list: ' + message;
        console.log('Vehicle that is selected: ' + message);
    };
    VehicleList.prototype.onMouseOverButtonEvent = function (vehicleObject) {
        console.log('On mouse over car info ' + vehicleObject.brand + ' ' + vehicleObject.color + '!');
        this.viewChild.viewChildExample();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VehicleList.prototype, "selected", void 0);
    __decorate([
        core_1.ViewChild(app_selected_vehicle_1.VehicleComponent), 
        __metadata('design:type', app_selected_vehicle_1.VehicleComponent)
    ], VehicleList.prototype, "viewChild", void 0);
    VehicleList = __decorate([
        core_1.Component({
            selector: 'vehicle-list',
            templateUrl: 'app/app.vehicle-list.html',
            styleUrls: ['./app/app.vehicle-list.css'],
            directives: [app_selected_vehicle_1.VehicleComponent],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], VehicleList);
    return VehicleList;
}());
exports.VehicleList = VehicleList;
//# sourceMappingURL=app.vehicle-list.js.map