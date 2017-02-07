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
var StatePipe = (function () {
    function StatePipe() {
    }
    StatePipe.prototype.transform = function (value, args) {
        var filter = args[0] ? args[0].toLocaleLowerCase() : null;
        filter = args.toString();
        return filter ? value.filter(function (deal) {
            return deal.state.toLocaleLowerCase().indexOf(filter) !== -1;
        }) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;        
    };
    return StatePipe;
}());
StatePipe = __decorate([
    core_1.Pipe({
        name: 'statePipe'
    }),
    __metadata("design:paramtypes", [])
], StatePipe);
exports.StatePipe = StatePipe;
//# sourceMappingURL=second-dealer-filter.pipe.js.map