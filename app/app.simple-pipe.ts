import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'simplePipe'
})

export class SimplePipe implements PipeTransform {
    transform (value: string, args: string[]): any {
        //let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return 'SIMPLE PIPE!'
    }
}