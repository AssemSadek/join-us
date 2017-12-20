import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsComponent } from './events/events.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'events', component: EventsComponent},
    {path: 'loggedin', component: LoggedinComponent},
    {path: 'search', component: SearchComponent},
    {path: 'users', component: UsersComponent},
    {path: 'edit-profile', component: EditProfileComponent},
    {path: 'create-event', component: CreateEventComponent},
    {path: 'view-event', component: ViewEventComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }



