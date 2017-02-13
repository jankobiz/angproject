import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Dealer } from './dealer';
import { DEALERS } from './mock-dealers';

@Injectable()

export class DealerService {

    private _dealersUrl = '/api/dealers.json';

    constructor(private _http: Http) {

    }

    getDealers(): Observable<Dealer[]> {
        return this._http.get(this._dealersUrl)
            .map((response: Response) => <Dealer[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getDealersOld(): Dealer[] {
        return DEALERS;
    }

    getDealersPromise(): Promise<Dealer[]> {
        return Promise.resolve(DEALERS);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}