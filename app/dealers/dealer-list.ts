import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { DealerService } from './dealer-service';

import { Dealer } from './dealer';

@Component ({
    selector: 'dealer-list',
    templateUrl: 'app/dealers/dealer-list.html',
    styleUrls: ['./app/dealers/dealer-list.css'],    
    providers: [DealerService],    
})

export class DealersList {
    @Output() selected = new EventEmitter<Dealer>();    
    //@ViewChild(DealerComponent) viewChild: DealerComponent;
    title: string;
    timesClicked: number = 0;
    inputtext = 'This is default text1';    
    anothertext = 'Another default text';
    messages: string [] = [];
    divcolor = "white";
    bckdivcolor = "darkred";
    dealers: Dealer [];
    selectedDealer: Dealer;
    dealers1: any;
    filterInput: string = '';
    hooksMessages: string [] = [];
    constructor(private _vehicleServis: DealerService) {
        this.title = 'Angular 2 Binding Events';
        //this.dealers = this._vehicleServis.getDealers();
    }
    log(msg: string, data: string){
        this.timesClicked+=1;
        this.messages.splice(0,0, msg + " " + this.timesClicked);
        console.log(msg);
        if(data){
            console.log(data);
        }
    }
    getVihacles (): void {
        this._vehicleServis.getDealersPromise().then(dealers => this.dealers = dealers);
    }
    ngOnInit() {
        this.dealers = this._vehicleServis.getDealers();
    }
    processLifeCycleEvent(event: string) {
        console.log(`Life cycle hook: ${event}!`);
        this.hooksMessages.splice(0,0, event);
    }
    onInit(event: string) {
        console.log(`Initialisatoin for the following component ${event}!`);
    }
    onChanges(event: string) {
        console.log(`Component ${event} has changed!`);
    }
    select (selectedVihacle: Dealer) {
        this.selectedDealer=selectedVihacle;
        this.selected.emit(selectedVihacle);
        console.log("Clicked on a vehicle " + selectedVihacle.model);
    }
    onDealerselected(message: string) {
        //this.title = 'Dealer list: ' + message;
        console.log('Dealer that is selected: ' + message);
    }
    onMouseOverButtonEvent(vehicleObject: Dealer) {
        console.log('On mouse over car info ' + vehicleObject.brand + ' ' + vehicleObject.color + '!');
        //this.viewChild.viewChildExample();
    }
    remove() {
        this.selectedDealer = null;
    }
}