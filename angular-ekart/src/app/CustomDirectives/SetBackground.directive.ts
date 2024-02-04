import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
// each element with setBackground directive will have it's own instance of this directive
// and that element will be injected by angular to the constructor of this directive
export class SetBackgroundDirective implements OnInit {
  // private element: ElementRef;
  constructor(private element: ElementRef) {
    // this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#36454F';
    this.element.nativeElement.style.color = 'white';
    console.log('SetBackgroundDirective called');
  }
}
