import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { LabComponent } from './lab/lab.component';
import { GreetComponent } from './greet/greet.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    StudentComponent,
    LabComponent,
    GreetComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class StudentModule { }
