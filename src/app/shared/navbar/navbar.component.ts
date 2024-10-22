import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeLabel: string = 'Inicio';
  
  setActiveLabel(label: string){
    this.activeLabel = label;
  }
}
