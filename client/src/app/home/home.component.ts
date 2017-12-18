import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
        private _authService: AuthenticationService,
        private _router: Router
    ) { }

    ngOnInit() { }

    logIn(username: string, password: string) {
        // law el fields b null ha2olo yedakhal kol el fields
        this._authService.authenticate(username, password);
        // authenticate traga3 boolean law true tamam law la2 ha2olo 3'alat
        this._router.navigate(['loggedin']);
    }
}
