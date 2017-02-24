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
var dealer_service_1 = require("./dealer-service");
var DealersList = (function () {
    function DealersList(_dealerServis) {
        this._dealerServis = _dealerServis;
        this.selected = new core_1.EventEmitter();
        this.timesClicked = 0;
        this.inputtext = 'This is default text1';
        this.anothertext = 'Another default text';
        this.messages = [];
        this.divcolor = "white";
        this.bckdivcolor = "darkred";
        this.filterInput = '';
        this.hooksMessages = [];
        this.completedMessage = 'Message that reports completion!';
        this.title = 'Angular 2 Binding Events';
        //this.dealers = this._dealerServis.getDealers();
    }
    DealersList.prototype.log = function (msg, data) {
        this.timesClicked += 1;
        this.messages.splice(0, 0, msg + " " + this.timesClicked);
        console.log(msg);
        if (data) {
            console.log(data);
        }
    };
    DealersList.prototype.getDealers = function () {
        var _this = this;
        this._dealerServis.getDealersPromise().then(function (dealers) { return _this.dealers = dealers; });
    };
    DealersList.prototype.ngOnInit = function () {
        var _this = this;
        //this.dealers = this._dealerServis.getDealersOld();
        this._dealerServis.getDealers()
            .subscribe(function (dealers) { return _this.dealers = dealers; }, function (error) { return _this.errorMessage = error; }, function () { return console.log("Observable Completed!!!" + _this.completedMessage); });
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
    DealersList.prototype.select = function (selectedDealer) {
        this.selectedDealer = selectedDealer;
        this.selected.emit(selectedDealer);
        console.log("Clicked on a dealer " + selectedDealer.name);
    };
    DealersList.prototype.onDealerselected = function (message) {
        //this.title = 'Dealer list: ' + message;
        console.log('Dealer that is selected: ' + message);
    };
    DealersList.prototype.onMouseOverButtonEvent = function (dealerObject) {
        console.log('On mouse over car dealer info ' + dealerObject.name + ' ' + dealerObject.revenue + '!');
        //this.viewChild.viewChildExample();
    };
    DealersList.prototype.remove = function () {
        this.selectedDealer = null;
    };
    return DealersList;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DealersList.prototype, "selected", void 0);
DealersList = __decorate([
    core_1.Component({
        selector: 'dealer-list',
        templateUrl: 'app/dealers/dealer-list.html',
        styleUrls: ['./app/dealers/dealer-list.css']
    }),
    __metadata("design:paramtypes", [dealer_service_1.DealerService])
], DealersList);
exports.DealersList = DealersList;
//# sourceMappingURL=dealer-list.js.map