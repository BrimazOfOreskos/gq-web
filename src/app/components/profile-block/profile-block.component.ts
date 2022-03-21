import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { toggleProfileBlockMenu } from '@components/profile-block-menu/profile-block-menu.actions';
import { ApplicationState } from '@interfaces';

@Component({
  selector: 'app-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.css']
})
export class ProfileBlockComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
  }

  toggleProfileBlockMenu() {
    this.store.dispatch(toggleProfileBlockMenu());
  }

}
