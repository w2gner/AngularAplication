import { Component } from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'header-menu.component',
  templateUrl: 'header-menu.component.html',
  styleUrls: ['header-menu.component.scss'],
})
export class HeaderMenuComponent {
  clicked = false;

  handleClick() {
    this.clicked = true;
    console.log(this);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */