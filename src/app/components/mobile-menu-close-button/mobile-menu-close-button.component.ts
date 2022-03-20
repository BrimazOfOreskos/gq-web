import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-close-button',
  templateUrl: './mobile-menu-close-button.component.html',
  styleUrls: ['./mobile-menu-close-button.component.css']
})
export class MobileMenuCloseButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    alert('Closing menu...');
  }

}
