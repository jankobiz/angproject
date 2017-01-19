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
var vehicle_service_1 = require("./vehicle-service");
var DealersList = (function () {
    function DealersList(_vehicleServis) {
        this._vehicleServis = _vehicleServis;
        this.selected = new core_1.EventEmitter();
        this.timesClicked = 0;
        this.inputtext = 'This is default text';
        this.anothertext = 'Another default text';
        this.messages = [];
        this.divcolor = "white";
        this.bckdivcolor = "darkred";
        this.filterInput = '';
        this.hooksMessages = [];
        this.title = 'Angular 2 Binding Events';
        //this.vehicles = this._vehicleServis.getVehicles();
    }
    DealersList.prototype.log = function (msg, data) {
        this.timesClicked += 1;
        this.messages.splice(0, 0, msg + " " + this.timesClicked);
        console.log(msg);
        if (data) {
            console.log(data);
        }
    };
    DealersList.prototype.getVihacles = function () {
        var _this = this;
        this._vehicleServis.getVehiclesPromise().then(function (vehicles) { return _this.vehicles = vehicles; });
    };
    DealersList.prototype.ngOnInit = function () {
        this.vehicles = this._vehicleServis.getVehicles();
    };
    DealersList.prototype.processLifeCycleEvent = function (event) {
        console.log("Life cycle hook: " + event + "!");
        this.hooksMessages.splice(0, 0, event);
    };
    DealersList.prototype.onInit = function (event) {
        console.log("Initialisatoin for the following component " + event + "!");
    };
    DealersList.prototype.onChanges = function (event) {
        console.log("Component " + event + " has changed!");
    };
    DealersList.prototype.select = function (selectedVihacle) {
        this.selectedVehicle = selectedVihacle;
        this.selected.emit(selectedVihacle);
        console.log("Clicked on a vehicle " + selectedVihacle.model);
    };
    DealersList.prototype.onVehicleselected = function (message) {
        //this.title = 'Product list: ' + message;
        console.log('Vehicle that is selected: ' + message);
    };
    DealersList.prototype.onMouseOverButtonEvent = function (vehicleObject) {
        console.log('On mouse over car info ' + vehicleObject.brand + ' ' + vehicleObject.color + '!');
        //this.viewChild.viewChildExample();
    };
    DealersList.prototype.remove = function () {
        this.selectedVehicle = null;
    };
    return DealersList;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DealersList.prototype, "selected", void 0);
DealersList = __decorate([
    core_1.Component({
        selector: 'vehicle-list',
        templateUrl: 'app/vehicles/vehicle-list.html',
        styleUrls: ['./app/vehicles/vehicle-list.css'],
        providers: [vehicle_service_1.VehicleService],
    }),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService])
], DealersList);
exports.DealersList = DealersList;
//# sourceMappingURL=dealers-list.js.map