import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url = 'https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudantnosqldb.appdomain.cloud/'
 dbUserName = 'apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0'
 dbPassword = '1cd6b51776516316358ce28da3097318'
 basicAuth ='Basic ' +btoa(this.dbUserName+':'+this.dbPassword)


 httpOptions = {
  headers : new HttpHeaders({
   'content-type' : 'application/json', 
   'Authorization' : this.basicAuth
  })
 }



  constructor(private http:HttpClient) { }
  addEmployee(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_query/',doc);
  }
  addQuery(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_data/',doc);
  }
  addUser(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_user/',doc);
  }
  addapproved(doc:any,doc1:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_approved',doc,doc1);
  }
  addSalary(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_salary/',doc);
  }

  getEmployee(){
    return this.http.get('http://localhost:8000/get_query/');
  }
  getUser(){
    return this.http.get('http://localhost:8000/get_user/');
  }
  getapproved(){
    return this.http.get('http://localhost:8000/get_approved/');
  }
  getleaveapproved(id:any){
    return this.http.get('http://localhost:8000/get_leaveapproved/'+id);
  }
  getdata(id:any){
    return this.http.get(`http://localhost:8000/get__query/${id}`);
  }
  getQuery(){
    return this.http.get('http://localhost:8000/get_data/');
  }
  getSalary(){
    return this.http.get('http://localhost:8000/get_salary/');
  }
  getAllEmployee(id:any){
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  getAllQuery(id:any){
    return this.http.get(`http://localhost:8000/get_all_data/${id}`);
  }
  getAllUser(id:any){
    return this.http.get(`http://localhost:8000/get_all_user/${id}`);
  }
  getAllSalary(id:any){
    return this.http.get(`http://localhost:8000/get_all_salary/${id}`);
  }
  
  deleteEmployee(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
  }
  deleteSalary(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_salary/${id}/${id1}`);
  }
  deleteapproved(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_approved/${id}/${id1}`);
  }
  // delete(id:string,rev:string){
  //   const urld = this.url+'employee-details/'+id+'/?rev='+rev;
  //   return this.http.delete(urld,this.httpOptions);

  // }
  // deleteUser(id:string,rev:string){
  //   const urld = this.url+'employee-details/'+id+'/?rev='+rev;
  //   return this.http.delete(urld,this.httpOptions);

  // }
  deleteQuery(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
  }
  deleteleave(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_leave/${id}/${id1}`);
  }

  updateEmployee(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/',doc);
  }
  updateSalary(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_salary/',doc);
  }
  updateQuery(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/',doc);
  }

  registerdata(formObject:any){
    return this.http.post('http://localhost:8000/postquery',formObject)
  }
  getRegisterdata(formObject:any){
    return this.http.get('http://localhost:8000/postquery',formObject)
  }
  checkuserlogin(userlogin:any)
  {
    console.log("hi");
   return this.http.get<any>('http://localhost:8000/getdata/'+userlogin);
  }
  getDataById(database: string, id: any) {
    const url = this.url + database + '/' + id;
    return this.http.get(url, this.httpOptions);
  }
  getByType(type: string) {
    let url = this.url + 'employee-details/_find'
    let typedData = {
      selector: {
        type: type
      }
   
    };
    return this.http.post(url, typedData, this.httpOptions)

  }
  getadmin() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getadminId(id: any) {
    return this.http.get(`http://localhost:8000/getadminId/${id}`);
  }

  uniqueidChanged(id:any){
    let name ={
      selector:{
        "name":id,
        "type":"dashboard"
      }
    }
    return this.http.get('http//locahost:8000/uniqueidChanged/'+name);
  
  }
 }
