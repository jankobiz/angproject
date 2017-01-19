import { Injectable } from '@angular/core';

import { Dealer } from './dealer';
import { DEALERS } from './mock-dealers';

import { Http } from '@angular/http';

@Injectable()

export class DealerService {

    constructor(private _http: Http) {
        
    }

    getDealers(): Dealer[] {
        return DEALERS;
    }

    getDealersPromise(): Promise<Dealer[]> {
        return Promise.resolve(DEALERS);
    }

    getDealers1 = () => [
        { id: 1, name: 'X-Wing Fighter' },
        { id: 2, name: 'Tie Fighter' },
        { id: 3, name: 'Y-Wing Fighter' }
    ];
}