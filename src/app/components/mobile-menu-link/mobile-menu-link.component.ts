import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-link',
  templateUrl: './mobile-menu-link.component.html',
  styleUrls: ['./mobile-menu-link.component.css']
})
export class MobileMenuLinkComponent implements OnInit {
  @Input() route: string;

  constructor() { }

  ngOnInit(): void {
  }

}
