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
  

  getEmployee(){
    return this.http.get('http://localhost:8000/get_query/');
  }
  getdata(id:any){
    return this.http.get(`http://localhost:8000/get__query/${id}`);
  }
  // getdata(obj:any){
  //   return this.http.get('http://localhost:8000/get__query/',obj);
  // }
  getQuery(){
    return this.http.get('http://localhost:8000/get_data/');
  }
  getAllEmployee(id:any){
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  getAllQuery(id:any){
    return this.http.get(`http://localhost:8000/get_all_data/${id}`);
  }
  
  deleteEmployee(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
  }
  delete(id:string,rev:string){
    const urld = this.url+'query-data/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
  deleteQuery(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
  }
  updateEmployee(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/',doc);
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
  // getAdmin(id: any) {
  //   return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  // }
}
// import { Injectable } from '@angular/core';
// import{HttpClient, HttpHeaders} from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeServiceService {
//   url = 'https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudantnosqldb.appdomain.cloud/'
//  dbUserName = 'apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0'
//  dbPassword = '1cd6b51776516316358ce28da3097318'
//  basicAuth ='Basic ' +btoa(this.dbUserName+':'+this.dbPassword)


//  httpOptions = {
//   headers : new HttpHeaders({
//    'content-type' : 'application/json',
//    'Authorization' : this.basicAuth
//   })
//  }



//   constructor(private http:HttpClient) { }
//   addEmployee(doc:any){
//     console.log(doc);
//     return this.http.post('http://localhost:8000/post_query/',doc);
//   }
//   addQuery(doc:any){
//     console.log(doc);
//     return this.http.post('http://localhost:8000/post_data/',doc);
//   }
  

//   getEmployee(){
//     return this.http.get('http://localhost:8000/get_query/');
//   }
//   getdata(obj:any){
//     return this.http.get('http://localhost:8000/get__query/',obj);
//   }
//   getQuery(){
//     return this.http.get('http://localhost:8000/get_data/');
//   }
//   getAllEmployee(id:any){
//     return this.http.get(`http://localhost:8000/get_all_query/${id}`);
//   }
//   getAllQuery(id:any){
//     return this.http.get(`http://localhost:8000/get_all_data/${id}`);
//   }
  
//   deleteEmployee(id:any,id1:any){
//     return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
//   }
//   delete(id:string,rev:string){
//     const urld = this.url+'query-data/'+id+'/?rev='+rev;
//     return this.http.delete(urld,this.httpOptions);

//   }
//   deleteQuery(id:any,id1:any){
//     return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
//   }
//   updateEmployee(doc:any){
//     console.log(doc);
//     return this.http.put('http://localhost:8000/update_query/',doc);
//   }
//   updateQuery(doc:any){
//     console.log(doc);
//     return this.http.put('http://localhost:8000/update_query/',doc);
//   }

//   registerdata(formObject:any){
//     return this.http.post('http://localhost:8000/postquery',formObject)
//   }
//   getRegisterdata(formObject:any){
//     return this.http.get('http://localhost:8000/postquery',formObject)
//   }
//   // getAdmin(id: any) {
//   //   return this.http.get(`http://localhost:8000/get_all_query/${id}`);
//   // }
// }