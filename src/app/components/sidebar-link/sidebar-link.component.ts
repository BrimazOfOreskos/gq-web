import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.css']
})
export class SidebarLinkComponent implements OnInit {
  @Input() route: string;

  constructor() { }

  ngOnInit(): void {
  }

}
