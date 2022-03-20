import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-open-button',
  templateUrl: './mobile-menu-open-button.component.html',
  styleUrls: ['./mobile-menu-open-button.component.css']
})
export class MobileMenuOpenButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    alert('Opening menu...');
  }

}
