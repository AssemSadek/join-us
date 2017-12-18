import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CoreService } from '../services/core.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users: Observable<any>;
    constructor(private coreService: CoreService) {
    }

    ngOnInit() {
        this.users = this.getUsers();
    }


    getUsers(): Observable<any> {
        return this.coreService.getUsers();
    }

}
