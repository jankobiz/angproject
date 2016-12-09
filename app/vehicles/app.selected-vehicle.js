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
var app_vehicle_1 = require("./app.vehicle");
var VehicleComponent = (function () {
    function VehicleComponent() {
        this.vehicleClicked = new core_1.EventEmitter();
        this.mouseOverButton = new core_1.EventEmitter();
        this.onLifeCycleHookEvent = new core_1.EventEmitter();
    }
    VehicleComponent.prototype.onClick = function () {
        console.log('H3 selected vehicle has been clicked!');
        this.vehicleClicked.emit("The vehicle " + this.vehicleselected.model + " was clicked!");
    };
    VehicleComponent.prototype.onMouseOver = function () {
        console.log('Trying another event listener');
        this.mouseOverButton.emit(this.vehicleselected);
    };
    VehicleComponent.prototype.viewChildExample = function () {
        console.log('Viewchild example is working! You have selected ' + this.vehicleselected.model);
    };
    VehicleComponent.prototype.ngAfterViewInit = function () {
        console.log('This is AFTER VIEW EVENT!');
        this.onLifeCycleHookEvent.emit('AFTER VIEW INIT Life cycle hook!');
    };
    VehicleComponent.prototype.ngOnInit = function () {
        console.log('This is ON INIT EVENT!');
        this.onLifeCycleHookEvent.emit('On INIT life cycle hook!');
    };
    VehicleComponent.prototype.ngOnChanges = function () {
        console.log("New vehichle " + this.vehicleselected.model + " was selected!");
        console.log('New vehichle selected - ' + this.vehicleselected.model);
        this.onLifeCycleHookEvent.emit('On CHANGES life cycle hook!');
        //console.log('New vehichle selected!');
    };
    VehicleComponent.prototype.ngOnDestroy = function () {
        console.log('Component destroyed!');
    };
    return VehicleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", app_vehicle_1.Vehicle)
], VehicleComponent.prototype, "vehicleselected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], VehicleComponent.prototype, "vehicleClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], VehicleComponent.prototype, "mouseOverButton", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VehicleComponent.prototype, "onLifeCycleHookEvent", void 0);
VehicleComponent = __decorate([
    core_1.Component({
        selector: 'selected-vehicle',
        templateUrl: 'app/vehicles/app.selected-vehicle.html'
    }),
    __metadata("design:paramtypes", [])
], VehicleComponent);
exports.VehicleComponent = VehicleComponent;
//# sourceMappingURL=app.selected-vehicle.js.map