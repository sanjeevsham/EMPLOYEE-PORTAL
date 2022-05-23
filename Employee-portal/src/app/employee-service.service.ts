import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  addEmployee(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_query/',doc);
  }
  

  getEmployee(){
    return this.http.get('http://localhost:8000/get_query/');
  }
  getAllEmployee(id:any){
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  
  deleteEmployee(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
  }
  updateEmployee(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/',doc);
  }

  registerdata(formObject:any){
    return this.http.post('http://localhost:8000/postquery',formObject)
  }
  getregisterdata(formObject:any){
    return this.http.get('http://localhost:8000/postquery',formObject)
  }
}
