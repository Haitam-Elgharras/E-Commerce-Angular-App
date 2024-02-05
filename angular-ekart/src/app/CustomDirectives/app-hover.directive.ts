import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';
  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.border') border: string = '1px solid #28282b';

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#28282b');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
