import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-7',
  template: `
    <a>Cmp 7</a>
    <ul>
      <li>
        <app-cmp-10></app-cmp-10>
      </li>
      <li>
        <app-cmp-11></app-cmp-11>
      </li>
      <li>
        <app-cmp-12></app-cmp-12>
      </li>
    </ul>
  `
})
export class Cmp7Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}
