import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getJsonData () {
    return this.http.get('https://api-generator.retool.com/hjJ3Qm/personalInfo').pipe(res => res);
  }

  postData(data: any) {
     return this.http.post('https://api-generator.retool.com/hjJ3Qm/personalInfo', data);
  }
}
