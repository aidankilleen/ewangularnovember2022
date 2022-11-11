import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[allcaps]'
})
export class AllcapsDirective {

  @Input() allcaps:string = "upper";

 
  constructor(private elRef: ElementRef) { 
    console.log("allcaps!");
  }

  @HostListener('blur') onblur () {
    let value = this.elRef.nativeElement.value;
    console.log(`blur...:${ value }`);

    switch(this.allcaps) {
      case "upper":
        this.elRef.nativeElement.value = value.toUpperCase();
        break;
      case "lower":
        this.elRef.nativeElement.value = value.toLowerCase();
        break;
      case "title":
        value = value.replace(/\w\S*/g, function(txt:string){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        this.elRef.nativeElement.value = value;
        break;
    }
  }
}
