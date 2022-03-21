import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { ApplicationState, MobileMenuState } from '@interfaces';
import { toggleMobileMenu } from './mobile-menu.actions';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  mobileMenuState$: Observable<MobileMenuState>;

  constructor(private store: Store<ApplicationState>) {
    this.mobileMenuState$ = this.store.select('mobileMenu');
  }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.store.dispatch(toggleMobileMenu());
  }

}
