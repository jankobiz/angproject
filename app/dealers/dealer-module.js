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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var dealer_filter_pipe_1 = require("./dealer-filter.pipe");
var dealers_list_1 = require("./dealers-list");
var selected_dealer_1 = require("./selected-dealer");
var appRoutes = [
    { path: 'dealers', component: dealers_list_1.DealersList }
];
var DealerModule = (function () {
    function DealerModule() {
    }
    return DealerModule;
}());
DealerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [dealers_list_1.DealersList],
        declarations: [dealers_list_1.DealersList, selected_dealer_1.DealerComponent, dealer_filter_pipe_1.MyPipe],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], DealerModule);
exports.DealerModule = DealerModule;
//# sourceMappingURL=dealer-module.js.map