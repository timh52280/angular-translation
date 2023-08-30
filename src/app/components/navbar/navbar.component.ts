import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.menuItems = [{
      label: 'Inicio',
      icon: PrimeIcons.HOME,
    }];
  }
  
}
