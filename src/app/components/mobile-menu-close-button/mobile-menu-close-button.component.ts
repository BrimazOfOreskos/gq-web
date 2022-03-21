import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { toggleMobileMenu } from '@components/mobile-menu/mobile-menu.actions';
import { ApplicationState, MobileMenuState } from '@interfaces';

@Component({
  selector: 'app-mobile-menu-close-button',
  templateUrl: './mobile-menu-close-button.component.html',
  styleUrls: ['./mobile-menu-close-button.component.css']
})
export class MobileMenuCloseButtonComponent implements OnInit {
  mobileMenuState$: Observable<MobileMenuState>;

  constructor(private store: Store<ApplicationState>) {
    this.mobileMenuState$ = this.store.select('mobileMenu');
  }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    // alert('Closing menu...');
    this.store.dispatch(toggleMobileMenu());
  }

}
