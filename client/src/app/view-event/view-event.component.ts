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
  public eventInfo: Observable<string>;
  slt: string = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  public title: string;
  
  constructor(private coreService: CoreService,
              private route: ActivatedRoute) { 
                this.route.queryParams.subscribe(params => 
                  this.title = params["title"]
                );
  }

  ngOnInit() {
    this.ID = this.coreService.GetEventID(this.title);
    this.ID.subscribe(data => {console.log(data[0]["ID"]);
                              this.eventInfo = this.coreService.getEventInfo(data[0]["ID"]);
                              console.log(this.eventInfo);
                            });
  }

}
