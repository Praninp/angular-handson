import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(
    private dataService : DataService
  ) {}
  labInput: number = 0;
  numberOfLabsCount: number = 0;
  users: any;

  ngOnInit() {
    this.dataService.getJsonData().subscribe((res: any)=> {
      this.users = res
    });
  }

  numberOfLabs (count: number) {
    this.numberOfLabsCount = count;
  }

}
