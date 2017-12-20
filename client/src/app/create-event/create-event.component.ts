import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../services/core.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public response: Observable<any>;
  constructor(private router: Router,
              private coreService: CoreService) {
              }

  ngOnInit() {
  }

  createEvent(title: string, startDate: string, endDate: string, description: string, category: string, image: string, ticket: string) {
    console.log(title);
    this.response = this.coreService.createEvent(title,startDate,endDate,description,category,image,ticket);
    this.response.subscribe(data => console.log(data));
    this.router.navigate(['loggedin']);
  }

}
