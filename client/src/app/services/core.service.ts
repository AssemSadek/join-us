import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CoreService {

    constructor(private http: Http) { }

    getUsers(): Observable<any> {
        return this.http.get('/users').map(res => res.json());
    }

}
