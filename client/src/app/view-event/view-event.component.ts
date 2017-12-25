import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  public ID: Observable<string>;
  public eventInfoObs: Observable<string>;
  public eventParticipantsObs: Observable<string>;
  public eventParticipants;
  public eventCommentsObs: Observable<string>;
  public eventComments;
  public eventInfo;
  slt: string = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  public title: string;
  
  constructor(private coreService: CoreService,
              private route: ActivatedRoute) { 
                this.route.queryParams.subscribe(params => 
                  this.title = params["title"]
                );
  }

  ngOnInit() {
    this.eventInfoObs = this.coreService.getEventID(this.title).flatMap(data => this.coreService.getEventInfo(data[0]["ID"]));
    this.eventInfoObs.subscribe(data => this.eventInfo = data[0]);

    this.eventParticipantsObs = this.coreService.getEventID(this.title).flatMap(data => this.coreService.getParticipants(data[0]["ID"]));
    this.eventParticipantsObs.subscribe(data => this.eventParticipants = data);

    this.eventCommentsObs = this.coreService.getEventID(this.title).flatMap(data => this.coreService.getEventComments(data[0]["ID"]));
    this.eventCommentsObs.subscribe(data => this.eventComments = data);
  }

}
