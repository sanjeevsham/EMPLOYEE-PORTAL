import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getQuery();
  }
  erase (id:string,rev:string){
    this.api.delete(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
  }
  getQuery(){
    this.store=[];
    this.api.getQuery().subscribe(res=>{
      console.log(res);
      console.log("response is comming");
      this.alluser=res;
      // this.alluser=this.alluser.data;
      this.alluser=this.alluser.rows;
      console.log(this.alluser);
      // const temp = this.alluser;
      for (const key in this.alluser) {
            if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
              const element = this.alluser[key];
              console.log(element.id);
              this.api.getAllQuery(element.id).subscribe(res=>{
                console.log(res);
                this.exchange=res;
                // this.exchange=this.exchange.data;
                this.store.push(this.exchange);
                console.log("data receved");
              },rej=>{
                console.log("error"+rej);
              })
            
            }
          }
    },rej=>{
        console.log("opps! Somthing went wrong"+rej);
    })
  }
  
  // delete(data:any){
  //   this.api.deleteQuery(data._id,data._rev).subscribe(res=>{
  //     console.log("your data has deleted, please refresh the page");
  //     alert('your data was deleted successfully')
  //   },rej=>{
  //     console.log("oops can not delete"+rej);
  //   })

  // }
  
  // onEdit(row:any){
  //   // console.log(row);
  //   // this.route.navigate(['contactus']);
  //   this.addform.controls['firstname'].setValue(row.firstname);
  //   this.addform.controls['lastname'].setValue(row.lastname);
  //   this.addform.controls['email'].setValue(row.email);
  //   this.addform.controls['mobileno'].setValue(row.mobileno);
  //   this.addform.controls['query'].setValue(row.query);
  //   this.addform.controls['_id'].setValue(row._id);
  //   this.addform.controls['_rev'].setValue(row._rev);
  // }
}
