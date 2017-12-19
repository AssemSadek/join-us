import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private dummy: Observable<any>;

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit() { }

    logIn(username: string, password: string) {
        this.dummy = this.authService.authenticate(username, password);
        this.dummy.subscribe(data => {if (data["m"] == null) {
                                            this.router.navigate(['loggedin']);
                                        }
                                        else {
                                            console.log("ERROOOR");
                                        };
                                    });
    }
}
