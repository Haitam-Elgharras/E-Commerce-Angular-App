import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // The set accessor allows for custom logic to be executed whenever the input property changes.
  @Input() set disableProduct(isDisabled: boolean) {
    if (isDisabled) {
      this.renderer.addClass(
        this.el.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
