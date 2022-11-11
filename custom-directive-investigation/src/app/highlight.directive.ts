import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef, 
              private renderer: Renderer2) { 
    console.log("hightlight directive constructor");
    this.elRef.nativeElement.style.background = "lightcoral";
  }

}
