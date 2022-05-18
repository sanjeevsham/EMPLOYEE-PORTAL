import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  registerdata(formObject:any){
    return this.http.post('http://localhost:8000/postquery',formObject)
  }
}
