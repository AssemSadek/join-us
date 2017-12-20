import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Rx';
import { ViewEncapsulation } from '@angular/core';
import { CoreService } from '../services/core.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation :ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    private dummy: Observable<any>;
    private signUpReturn: Observable<any>;

    constructor(private authService: AuthenticationService,
                private router: Router,
                private coreService: CoreService) { 
                }

    ngOnInit() { }

    logIn(username: string, password: string) {
        this.dummy = this.authService.authenticate(username, password);
        this.dummy.subscribe(isLoggedIn => {if (isLoggedIn) 
                                                this.router.navigate(['loggedin']);
                                            else
                                                document.getElementById("alertMsg").setAttribute("style", "display:block");
                                            });
    }
    
    register(fullName: string, username: string, email: string, password: string) {
        console.log(fullName);
        console.log(username);
        console.log(email);
        console.log(password);
        this.signUpReturn = this.coreService.signUp(fullName, username, email, password);
        this.signUpReturn.subscribe(data => console.log(data));

    }
}
