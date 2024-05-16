import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRemoveSubmitButton]',
  standalone: true // Ensure it's standalone
})
export class RemoveSubmitButtonDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('submit')
  onSubmit() {
    const button = this.el.nativeElement.querySelector('button[type="submit"]');
    if (button) {
      this.renderer.setStyle(button, 'display', 'none');
    }
  }
}
