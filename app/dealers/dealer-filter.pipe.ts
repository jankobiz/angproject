import {Pipe, PipeTransform} from '@angular/core';
import { Dealer } from './dealer';

@Pipe({
    name: 'myPipe'
})

export class MyPipe implements PipeTransform {
    transform (value: Dealer[], args: string[]): Dealer[] {        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        let transformed: Dealer[] = [  
            {id: 2, brand: 'Mazda', model: "636 TDI", color: "blue", price: 24000},    
            {id: 5, brand: 'Kia', model: "Sephia 2", color: "silver", price: 19600},    
            {id: 8, brand: 'Seat', model: "Ibiza 16v", color: "magenta", price: 24500},
            {id: 9, brand: 'Zastava', model: "Yugo 55", color: "yellow", price: 20400},
            {id: 9, brand: 'Zastava automobili', model: "Skala 55", color: "yellow", price: 20400}
        ];
        filter = args.toString();
        if (args[0]) {
            console.log('Entire array ' + args.toString());
            console.log('Just first argument ' + args[0].toLocaleLowerCase());
        }
        //return args[0] ? transformed : value;                
        return filter ? value.filter((veh: Dealer) => 
            veh.brand.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;        
    }
}