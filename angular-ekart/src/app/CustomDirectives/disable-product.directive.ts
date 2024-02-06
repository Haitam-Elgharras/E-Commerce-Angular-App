import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // the set keyword make it possible to receive args from the host element
  @Input() set disableProduct(isDisabled: boolean) {
    if (isDisabled) {
      this.renderer.addClass(
        this.el.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
