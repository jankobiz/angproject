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
var MyPipe = (function () {
    function MyPipe() {
    }
    MyPipe.prototype.transform = function (value, args) {
        var filter = args[0] ? args[0].toLocaleLowerCase() : null;
        var transformed = [
            { id: 2, brand: 'Mazda', model: "636 TDI", color: "blue", price: 24000 },
            { id: 5, brand: 'Kia', model: "Sephia 2", color: "silver", price: 19600 },
            { id: 8, brand: 'Seat', model: "Ibiza 16v", color: "magenta", price: 24500 },
            { id: 9, brand: 'Zastava', model: "Yugo 55", color: "yellow", price: 20400 },
            { id: 9, brand: 'Zastava automobili', model: "Skala 55", color: "yellow", price: 20400 }
        ];
        filter = args.toString();
        if (args[0]) {
            console.log('Entire array ' + args.toString());
            console.log('Just first argument ' + args[0].toLocaleLowerCase());
        }
        //return args[0] ? transformed : value;                
        return filter ? value.filter(function (veh) {
            return veh.brand.toLocaleLowerCase().indexOf(filter) !== -1;
        }) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;        
    };
    MyPipe = __decorate([
        core_1.Pipe({
            name: 'myPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], MyPipe);
    return MyPipe;
}());
exports.MyPipe = MyPipe;
//# sourceMappingURL=app.vehicle-filter.pipe.js.map