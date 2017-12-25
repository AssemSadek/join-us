import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CoreService } from '../services/core.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public userName: Observable<string>;
  public userInfoObs: Observable<string>;
  public userInfo = null;
  public updateReturn: Observable<string>;
  res: string;
  empty = '';
  constructor(private authService: AuthenticationService,
              private coreService: CoreService,
              private router: Router) { }

  ngOnInit() {
    this._initState();
  }

  private _initState(): void {
    this.userName = this.authService.getUserName();
    this.userName.subscribe(data => this.res = data);
    this.userInfoObs = this.coreService.getUserInfo(this.res);
    this.userInfoObs.subscribe(data => this.userInfo = data);
  }

  updateProfile(fullName: string, email: string, password: string, birthdate: string, gender: string, bio: string, image: string, interests: string) {
    this.updateReturn = this.coreService.updateUserInfo(fullName, email, password, birthdate, gender, bio, image, interests);
    this.updateReturn.subscribe(data => console.log(data));
    this.router.navigate(['loggedin']);
  } 

}
