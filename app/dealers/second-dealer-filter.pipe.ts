import {Pipe, PipeTransform} from '@angular/core';
import { Dealer } from './dealer';

@Pipe({
    name: 'statePipe'
})

export class StatePipe implements PipeTransform {
    transform (value: Dealer[], args: string[]): Dealer[] {        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        
        filter = args.toString();
        return filter ? value.filter((deal: Dealer) => 
            deal.state.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;        
    }
}