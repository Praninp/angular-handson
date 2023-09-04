import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(
    private dataService : DataService
  ){}
  personForm: FormGroup = new FormGroup({});
  users: any;

ngOnInit() {
  this.getData();
  this.personForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Email: new FormControl('')
  });
}

saveData() {
  this.dataService.postData(this.personForm.value).subscribe((res)=> {
    this.getData();
  })
}

getData() {
  this.dataService.getJsonData().subscribe((res: any)=> {
    this.users = res
  });
}

}
