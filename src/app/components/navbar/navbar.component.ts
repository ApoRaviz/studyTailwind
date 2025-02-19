import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggle :boolean = false;

  updateToggle(){
    this.toggle = !this.toggle;
  }
}
