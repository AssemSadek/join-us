import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createEvent(title: string, startDate: string, endDate: string, description: string, category: string, image: string, ticket: string) {
    console.log(title);
    console.log(startDate);
    console.log(endDate);
    console.log(description);
    console.log(category);
    console.log(image);
    console.log(ticket);
    this.router.navigate(['loggedin']);
  }

}
