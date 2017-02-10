import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DealerService } from './dealer-service';

import { Dealer } from './dealer';

@Component ({
    selector: 'selected-dealer',        
    templateUrl: 'app/dealers/selected-dealer.html'      
})

export class DealerComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    @Input() dealerselected: Dealer;
    @Output() dealerClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() mouseOverButton: EventEmitter<Dealer> = new EventEmitter<Dealer>();
    @Output() onLifeCycleHookEvent = new EventEmitter<string>();

    onClick() {
        console.log('H3 selected dealer has been clicked!');
        this.dealerClicked.emit(`The dealer ${this.dealerselected.name} was clicked!`);
    }
    onMouseOver() {
        console.log('Trying another event listener');
        this.mouseOverButton.emit(this.dealerselected);
    }
    viewChildExample() {
        console.log('Viewchild example is working! You have selected ' + this.dealerselected.name);
    }
    ngAfterViewInit() {
        console.log('This is AFTER VIEW EVENT!');
        this.onLifeCycleHookEvent.emit('AFTER VIEW INIT Life cycle hook!');
    }
    ngOnInit() {
        console.log('This is ON INIT EVENT!');
        this.onLifeCycleHookEvent.emit('On INIT life cycle hook!');
    }
    ngOnChanges() {
        console.log(`New vehichle ${this.dealerselected.name} was selected!`);
        console.log('New vehichle selected - ' + this.dealerselected.name);
        this.onLifeCycleHookEvent.emit('On CHANGES life cycle hook!');
        //console.log('New vehichle selected!');
    }
    ngOnDestroy() {
        console.log('Component destroyed!');
    }
}