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
var dealer_1 = require("./dealer");
var DealerComponent = (function () {
    function DealerComponent() {
        this.dealerClicked = new core_1.EventEmitter();
        this.mouseOverButton = new core_1.EventEmitter();
        this.onLifeCycleHookEvent = new core_1.EventEmitter();
    }
    DealerComponent.prototype.onClick = function () {
        console.log('H3 selected dealer has been clicked!');
        this.dealerClicked.emit("The dealer " + this.dealerselected.name + " was clicked!");
    };
    DealerComponent.prototype.onMouseOver = function () {
        console.log('Trying another event listener');
        this.mouseOverButton.emit(this.dealerselected);
    };
    DealerComponent.prototype.viewChildExample = function () {
        console.log('Viewchild example is working! You have selected ' + this.dealerselected.name);
    };
    DealerComponent.prototype.ngAfterViewInit = function () {
        console.log('This is AFTER VIEW EVENT!');
        this.onLifeCycleHookEvent.emit('AFTER VIEW INIT Life cycle hook!');
    };
    DealerComponent.prototype.ngOnInit = function () {
        console.log('This is ON INIT EVENT!');
        this.onLifeCycleHookEvent.emit('On INIT life cycle hook!');
    };
    DealerComponent.prototype.ngOnChanges = function () {
        console.log("New vehichle " + this.dealerselected.name + " was selected!");
        console.log('New vehichle selected - ' + this.dealerselected.name);
        this.onLifeCycleHookEvent.emit('On CHANGES life cycle hook!');
        //console.log('New vehichle selected!');
    };
    DealerComponent.prototype.ngOnDestroy = function () {
        console.log('Component destroyed!');
    };
    return DealerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", dealer_1.Dealer)
], DealerComponent.prototype, "dealerselected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DealerComponent.prototype, "dealerClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DealerComponent.prototype, "mouseOverButton", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DealerComponent.prototype, "onLifeCycleHookEvent", void 0);
DealerComponent = __decorate([
    core_1.Component({
        selector: 'selected-dealer',
        templateUrl: 'app/dealers/selected-dealer.html'
    }),
    __metadata("design:paramtypes", [])
], DealerComponent);
exports.DealerComponent = DealerComponent;
//# sourceMappingURL=selected-dealer.js.map