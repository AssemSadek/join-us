import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs/Observable';
import {Router, NavigationExtras} from "@angular/router";
import { CoreService } from './services/core.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public userName: Observable<string>;
    public isLoggedIn: Observable<boolean>;

    constructor(private _authService: AuthenticationService,
                private coreService: CoreService,
                private _router: Router) { }

    public ngOnInit(): void {
        this._initState();
    }

    public signOut(): void {
        this._authService.logout();
        this.coreService.logout();
    }

    /**
     * @private
     * @description
     * Initializes the component.
     */
    private _initState(): void {
        this.isLoggedIn = this._authService.getLoginState();
        this.userName = this._authService.getUserName();
    }

    public search(value: string) {
        if (value != ''){
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    "searchQuery": value
                }
            };
            this._router.navigate(['search'], navigationExtras);
        }
    }

    editProfile() {
        this._router.navigate(['edit-profile']);
    }

    createEvent() {
        this._router.navigate(['create-event']);
    }

}
