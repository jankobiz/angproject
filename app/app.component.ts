import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    title: string;
    timesClicked: number = 0;
    inputtext = 'This is default text';
    anothertext = 'Another default text';
    messages: string [] = [];
    divcolor = "white";
    bckdivcolor = "darkred";
    constructor() {
        this.title = 'Angular 2 Binding Events'
    }
    log(msg: string, data: string){        
        this.timesClicked+=1;
        this.messages.splice(0,0, msg + " " + this.timesClicked);
        console.log(msg);
        if(data){
            console.log(data);
        }
    }
}