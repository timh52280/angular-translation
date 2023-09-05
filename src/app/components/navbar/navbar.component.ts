import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
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

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      this.translate.get(['Inicio', 'Validaciones', 'Organizaciones', 'CuentasAcceso']).subscribe((values) => {
        this.menuItems = [{
          id: 'menu-item-home',
          label: values['Inicio'],
          icon: PrimeIcons.HOME,
        },
        {
          id: 'menu-item-validaciones',
          label: values['Validaciones'],
          icon: PrimeIcons.VERIFIED
        },
        {
          id: 'menu-item-organizaciones',
          label: values['Organizaciones'],
          icon: PrimeIcons.BUILDING
        },
        {
          id: 'menu-item-cuentas-acceso',
          label: values['CuentasAcceso'],
          icon: PrimeIcons.USERS
        }];
      });
    });     
  }
  
}