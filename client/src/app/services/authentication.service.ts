import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    private loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private userName: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(
        private http: Http
    ) { }

    /**
     * @method
     * @description
     * Logins the user to the service. Should implement HTTP logic
     * and based on its result log the user in or not.
     *
     * @param {string} username The user name the user logged in with.
     * @param {string} password The password the user logged in with.
     */
    public authenticate(username: string, password: string): Observable<any> {
        return this.http.post('/login',[{"username": username, "password": password}])
                        .map(res => res.json())
                        .do(data => {if (data["m"] == null) {
                                        this.loginState.next(true);
                                        this.userName.next(username)
                                    }});
    }

    /**
     * @method
     * @description
     * Logs the user out of the system. Probably will not need
     * any HTTP calls to do so.
     */
    public logout(): void {
        if(this.loginState.getValue()) {
            this.loginState.next(false);
            this.userName.next(null);
        }
    }

    /**
     * @method
     * @description
     * Gets the current login state stream as an observable.
     * This can be subscribed to via subscribe or via the
     * async pipe in the template to get the current
     * subject value.
     */
    public getLoginState(): Observable<boolean> {
        return this.loginState.asObservable();
    }

    /**
     * @method
     * @description
     * Gets the current user name stream as an observable.
     * This can be subscribed to via subscribe or via the
     * async pipe in the template to get the current
     * subject value.
     */
    public getUserName(): Observable<string> {
        return this.userName.asObservable();
    }
}
