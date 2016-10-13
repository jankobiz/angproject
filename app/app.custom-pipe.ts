import {Pipe, PipeTransform} from '@angular/core';
import { Vehicle } from './app.vehicle';

@Pipe({
    name: 'myPipe'
})

export class MyPipe implements PipeTransform {
    transform (value: Vehicle[], args: string[]): Vehicle[] {        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        let transformed: Vehicle[] = [  
            {id: 2, brand: 'Mazda', model: "636 TDI", color: "blue", price: 24000},    
            {id: 5, brand: 'Kia', model: "Sephia 2", color: "silver", price: 19600},    
            {id: 8, brand: 'Seat', model: "Ibiza 16v", color: "magenta", price: 24500},
            {id: 9, brand: 'Zastava', model: "Yugo 55", color: "yellow", price: 20400},
            {id: 9, brand: 'Zastava automobili', model: "Skala 55", color: "yellow", price: 20400}
        ];        
        if (args[0]) {
            console.log(args.toString());
            console.log(args[0].toLocaleLowerCase());
        }
        return args[0] ? transformed : value;                
        //return filter ? value.filter((vehicle: Vehicle) =>
          //  vehicle.brand.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;
        //return result;
    }
}