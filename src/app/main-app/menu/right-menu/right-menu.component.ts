import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  @HostBinding('class') classes = 'pt-4 d-flex';

  constructor() { }

  ngOnInit() {
  }

}
