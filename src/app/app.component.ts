import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CommunityComponent } from './components/community/community.component';
import { PixelgradeComponent } from './components/pixelgrade/pixelgrade.component';
import { StatsComponent } from './components/stats/stats.component';
import { HowComponent } from './components/how/how.component';
import { MeetComponent } from './components/meet/meet.component';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [NavbarComponent,HeaderComponent,ClientsComponent,CommunityComponent,PixelgradeComponent,StatsComponent,HowComponent,MeetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studyTailwinds';
}
