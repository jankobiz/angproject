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
        this.prevVehicleID = 0;
        this.nextButtonActive = true;
        this.avaliabilityChecked = false;
    }
    /*
        ngOnInit(): void {
            console.log(this._route.snapshot.params['id']);
            console.log(this._route.snapshot.url);
            let id = +this._route.snapshot.params['id'];
            this.pageTitle += `: ${id}`;
            this.getVehicle(id);
        }
    */
    VehicleDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.avaliabilityChecked = false;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.nextVehicleID = id;
            if (id === 1)
                _this.prevButtonActive = true;
            else
                _this.prevButtonActive = false;
            //if (id === 2) this.nextButtonActive = false;
            //else this.nextButtonActive = true;
            console.log('NEXT ID: ' + (_this.nextVehicleID + 1));
            _this.getVehicle(_this.nextVehicleID + 1, true);
            _this.getVehicle(id, false);
            console.log('Next id: ' + (_this.nextVehicleID + 1));
            console.log('Current id: ' + id);
        });
    };
    VehicleDetail.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VehicleDetail.prototype.getVehicle = function (id, check) {
        var _this = this;
        console.log('Getting vehicle for this ID: ' + id);
        this._vehicleService.getVehicle(id)
            .subscribe(function (vehicle) { _this.vehicle = vehicle, _this.checkVehicleAvaliability(id, check); }, function (error) { return _this.errorMessage = error; }, function () { return console.log("Vehicle observable completed!!! "); });
    };
    VehicleDetail.prototype.checkVehicleAvaliability = function (id, check) {
        console.log('Checking vehicle for this ID: ' + id);
        if (check)
            this.nextButtonActive = true;
        if (this.vehicle === undefined) {
            console.log('No more vehicles!!!!');
            //this.nextVehicleID = 1;
            console.log("Avaliability checked was: " + this.avaliabilityChecked);
            //if (this.avaliabilityChecked !== true) {
            //this.nextButtonActive = false;
            //    this.avaliabilityChecked = true;
            //    console.log("Avaliability checked is now: " + this.avaliabilityChecked);
            //}
            if (check)
                this.nextButtonActive = false;
            console.log("Next vehicle id: " + (this.nextVehicleID + 1));
        }
        else {
            console.log("Avaliability else branch checked is now: " + this.avaliabilityChecked);
            console.log("Next ID from fetch: " + this.vehicle.id);
        }
        console.log('Next button active: ' + this.nextButtonActive);
    };
    VehicleDetail.prototype.onBack = function () {
        //this._router.navigate(['/vehicles']);        
        this._router.navigate(['/vehicle', this.nextVehicleID - 1]);
    };
    VehicleDetail.prototype.onNext = function () {
        //this.getVehicle(this.nextVehicleID);        
        this._router.navigate(['/vehicle', this.nextVehicleID + 1]);
        //this._router.navigateByUrl('/vehicle/', this.nextVehicleID.toString);
        //this._router.navigate([10], { relativeTo: this._route });
        //this._router.navigate(['/vehicle']);
    };
    return VehicleDetail;
}());
VehicleDetail = __decorate([
    core_1.Component({
        selector: 'vehicle-details',
        templateUrl: 'app/vehicles/vehiclel-detail.component.html',
        styleUrls: ['./app/vehicles/vehicle-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        vehicle_service_1.VehicleService])
], VehicleDetail);
exports.VehicleDetail = VehicleDetail;
//# sourceMappingURL=vehicle-detail.component.js.map