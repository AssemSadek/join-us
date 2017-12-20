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

    getEvents(): Observable<any> {
        return this.http.get('/events').map(res => res.json());
    }

    getUserInfo(username: string): Observable<any> {
        return this.http.get('/users/' + username).map(res => res.json()[0]);
    }

    getEventsCreated(username: string): Observable<any> {
        return this.http.get('/userEvents/' + username).map(res => res.json());
    }

    getEventsAttended(username: string): Observable<any> {
        return this.http.get('/getAttendedEvents/' + username).map(res => res.json());
    }

    getCurrentEvents(username: string): Observable<any> {
        return this.http.get('/getCurrentEvents/' + username).map(res => res.json());
    }

    updateUserInfo(fullName: string, email: string, password: string, birthdate: string, gender: string, bio: string, image: string, interests: string): Observable<any>{
        return this.http.post('/updateUserInfo', {"fullName": fullName, "password": password, "email": email, "Image": image, "Gender": gender, "Birthdate": birthdate, "bio": bio, "Interests": interests}).map(res => res.json());
    }

    signUp(fullName: string, username: string, email: string, password: string): Observable<any> {
        return this.http.post('/signUp', {"username": username, "fullName": fullName, "email": email, "password": password}).map(res => res.json());
    }

    getFollowers(username: string): Observable<any> {
        return this.http.get('/userFollowers/' + username).map(res => res.json());
    }
}
