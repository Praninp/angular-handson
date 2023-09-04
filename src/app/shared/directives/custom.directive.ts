import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(private eleRef: ElementRef) { }

ngOnInit(): void {
  this.eleRef.nativeElement.style.backgroundColor = 'red';
}

}
