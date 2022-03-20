import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-block-menu-link',
  templateUrl: './profile-block-menu-link.component.html',
  styleUrls: ['./profile-block-menu-link.component.css']
})
export class ProfileBlockMenuLinkComponent implements OnInit {
  @Input() route: string;

  constructor() { }

  ngOnInit(): void {
  }

}
