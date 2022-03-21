import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { ApplicationState, ProfileBlockMenuState } from '@interfaces';
import { toggleProfileBlockMenu } from './profile-block-menu.actions';

@Component({
  selector: 'app-profile-block-menu',
  templateUrl: './profile-block-menu.component.html',
  styleUrls: ['./profile-block-menu.component.css']
})
export class ProfileBlockMenuComponent implements OnInit {
  profileBlockMenuState$: Observable<ProfileBlockMenuState>;

  constructor(private store: Store<ApplicationState>) {
    this.profileBlockMenuState$ = this.store.select('profileBlockMenu');
  }

  ngOnInit(): void {
  }

  toggleProfileBlockMenu() {
    this.store.dispatch(toggleProfileBlockMenu());
  }

}
