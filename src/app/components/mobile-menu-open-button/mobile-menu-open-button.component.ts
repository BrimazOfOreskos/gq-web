import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { toggleMobileMenu } from '@components/mobile-menu/mobile-menu.actions';
import { ApplicationState, MobileMenuState } from '@interfaces';

@Component({
  selector: 'app-mobile-menu-open-button',
  templateUrl: './mobile-menu-open-button.component.html',
  styleUrls: ['./mobile-menu-open-button.component.css']
})
export class MobileMenuOpenButtonComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    // alert('Opening menu...');
    this.store.dispatch(toggleMobileMenu());
  }

}
