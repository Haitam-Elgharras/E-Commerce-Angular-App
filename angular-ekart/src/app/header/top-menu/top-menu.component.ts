import { Component } from '@angular/core';

@Component({
  // to use it as an html tag
  // selector: 'top-menu',

  // to use it as an attribute
  // selector: '[top-menu]',

  // to use it as an id
  // selector: '#top-menu',

  // to use it as a class
  selector: '.top-menu',

  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent {}
