import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[cardFlip]'
})
export class CardFlipDirective {

  flipState = 'no-flip';

  @HostBinding('@flipAnimation') get animation() {
    return this.flipState;
  };

  @HostListener('mouseenter', ['$event']) onEnter(e) {
    this.flipState = 'flip';
  }

  @HostListener('mouseleave', ['$event']) onLeave(e) {
    this.flipState = 'no-flip';

  }
}
