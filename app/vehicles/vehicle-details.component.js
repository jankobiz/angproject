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
var router_1 = require("@angular/router");
var vehicle_service_1 = require("./vehicle-service");
var VehicleDetail = (function () {
    function VehicleDetail(_route, _router, _vehicleService) {
        this._route = _route;
        this._router = _router;
        this._vehicleService = _vehicleService;
        this.pageTitle = 'Vehicle Detail';
    }
    VehicleDetail.prototype.ngOnInit = function () {
        console.log(this._route.snapshot.params['id']);
        console.log(this._route.snapshot.url);
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
    };
    VehicleDetail.prototype.getVehicle = function (id) {
        var _this = this;
        this._vehicleServis.getVehicle(id)
            .subscribe(function (vehicle) { return _this.vehicle = vehicle.data; }, function (error) { return _this.errorMessage = error; }, function () { return console.log("Vehicle observable completed!!! "); });
    };
    VehicleDetail.prototype.onBack = function () {
        this._router.navigate(['/vehicles']);
    };
    return VehicleDetail;
}());
VehicleDetail = __decorate([
    core_1.Component({
        selector: 'vehicle-details',
        templateUrl: 'app/vehicles/vehiclel-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        vehicle_service_1.VehicleService])
], VehicleDetail);
exports.VehicleDetail = VehicleDetail;
//# sourceMappingURL=vehicle-details.component.js.map