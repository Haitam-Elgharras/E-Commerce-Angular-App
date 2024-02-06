import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('setBackground') backgroundColor: string = '';
  @Input() textColor: string = '';

  // This is an alias for the input property then we can call it like this: <div [setBackground]="'red'">
  // @Input('setBackground') test = '';

  // also we can declare it as object @Input() setBackground:
  // { backgroundColor: string; textColor: string } = { backgroundColor: '', textColor: '' };
  // then we can call it like this: <div [setBackground]="{ backgroundColor: 'red', textColor: 'white' }">

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.backgroundColor
    );

    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
  }
}
