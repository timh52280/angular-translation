import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  menuItemHomeLabel: string | undefined;

  constructor(private translate: TranslateService, private cdRef:ChangeDetectorRef) {

  }

  ngOnInit(): void {

    this.translate
    .get('Inicio').subscribe((x:string) => {
      this.menuItems = [{
           id: 'menu-item-home',
           label: x,
           icon: PrimeIcons.HOME
         }];
    })
    // .subscribe((res: string) => this.menuItemHomeLabel = res);

    // //  this.menuItems = [{
    // //   id: 'menu-item-home',
    // //   label: this.menuItemHomeLabel,
    // //   icon: PrimeIcons.HOME,
    // // }];
  }
  
}