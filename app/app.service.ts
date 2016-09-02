import {Injectable} from '@angular/core';

import {Vehicle} from './app.vehicle';
import {VEHICLES} from './app.mock-vehicles';


@Injectable()

export class AppService {
    getVehicles(): Vehicle[] {
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
}