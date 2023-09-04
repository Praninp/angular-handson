import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  @Input () labInput: any;
  @Output () numberOfLabs: EventEmitter<number> =  new EventEmitter();
  numberOfLabsCount: number = 0;

  labClick () {
    this.numberOfLabsCount = this.numberOfLabsCount + 1;
    this.numberOfLabs.emit(this.numberOfLabsCount);

  }
  
}
