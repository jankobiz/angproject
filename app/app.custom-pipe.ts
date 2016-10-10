import {Pipe, PipeTransform} from '@angular/core';
import { Vehicle } from './app.vehicle';

@Pipe({
    name: 'myPipe'
})

export class MyPipe implements PipeTransform {
    transform (value: Vehicle[], args: string[]): Vehicle[] {        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;        
        if (args[0]) {
            console.log(args.toString());
            console.log(args[0].toLocaleLowerCase());
        }
        return filter ? value.filter((vehicle: Vehicle) =>
            vehicle.brand.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;
        //return result;
    }
}