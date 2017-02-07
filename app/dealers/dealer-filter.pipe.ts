import {Pipe, PipeTransform} from '@angular/core';
import { Dealer } from './dealer';

@Pipe({
    name: 'myPipe'
})

export class MyPipe implements PipeTransform {
    transform (value: Dealer[], args: string[]): Dealer[] {        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        let temp: Dealer[] = value;
        let output: Dealer[] = value;
        filter = args.toString();
        //return filter ? value.filter((deal: Dealer) => 
          //  deal.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;
        if ((deal: Dealer) => deal.name.toLocaleLowerCase().indexOf(filter) !== -1) {
            output =  filter ? value.filter((deal: Dealer) => deal.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        }        
        if ((deal: Dealer) => deal.state.toLocaleLowerCase().indexOf(filter) !== -1) {
            output = filter ? temp.filter((deal: Dealer) => deal.state.toLocaleLowerCase().indexOf(filter) !== -1) : temp;
        }
        return output;
    }
}