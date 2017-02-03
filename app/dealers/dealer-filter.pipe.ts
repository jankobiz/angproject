import {Pipe, PipeTransform} from '@angular/core';
import { Dealer } from './dealer';

@Pipe({
    name: 'myPipe'
})

export class MyPipe implements PipeTransform {
    transform (value: Dealer[], args: string[]): Dealer[] {        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        
        filter = args.toString();
        if (args[0]) {
            console.log('Entire array ' + args.toString());
            console.log('Just first argument ' + args[0].toLocaleLowerCase());
        }
        //return args[0] ? transformed : value;                
        return filter ? value.filter((deal: Dealer) => 
            deal.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
        //return filter ? value.filter(function(vel) {
        //    return vel.model.toLocaleLowerCase().indexOf(filter) !== -1
        //}) : value;        
    }
}