import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';

@Injectable()

export class VehicleService {

    private _vehiclesUrl = '/api/vehicles.json';

    constructor(private _http: Http) {
        
    }

    getVehicles(): Observable<Vehicle[]> {
        return this._http.get(this._vehiclesUrl)
            .map((response: Response) => <Vehicle[]>response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVehicle(id: number): Observable<Vehicle> {
        return this.getVehicles()
            .map((vehicles: Vehicle[]) => vehicles.data.find(v => v.id === id));
    }

    getVehiclesOld(): Vehicle[] {
        return VEHICLES;
    }

    getVehiclesPromise(): Promise<Vehicle[]> {
        return Promise.resolve(VEHICLES);
    }

    getVehicles1 = () => [
        { id: 1, name: 'X-Wing Fighter' },
        { id: 2, name: 'Tie Fighter' },
        { id: 3, name: 'Y-Wing Fighter' }
    ];

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}