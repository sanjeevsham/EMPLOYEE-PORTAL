import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-applied-users',
  templateUrl: './applied-users.component.html',
  styleUrls: ['./applied-users.component.css']
})
export class AppliedUsersComponent implements OnInit {
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  erase (id:string,rev:string){
    this.api.deleteUser(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
  }
  getUser(){
    this.store=[];
    this.api.getUser().subscribe(res=>{
      console.log(res);
      console.log("response is comming");
      this.alluser=res;
      this.alluser=this.alluser.rows;
      console.log(this.alluser);
      for (const key in this.alluser) {
            if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
              const element = this.alluser[key];
              console.log(element.id);
              this.api.getAllUser(element.id).subscribe(res=>{
                console.log(res);
                this.exchange=res;
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
}