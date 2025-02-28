import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CommunityComponent } from './components/community/community.component';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [NavbarComponent,HeaderComponent,ClientsComponent,CommunityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studyTailwinds';
}
