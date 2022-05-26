import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  [x: string]: any;
formgroup!:FormGroup;
successMessage:string="";
emp:any={
  email:'',
  password:''
}

  constructor(private fb:FormBuilder,private api:EmployeeServiceService,private route:Router) { 
    this.formgroup = this.fb.group({
      email : [this.emp.email],
      password : [this.emp.password]
    })
   }

  
  ngOnInit(): void {
    this.formgroup = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }
login(obj:any){
  this.email=obj.email
  this.password=obj.password
  console.log(this.email);
  console.log(this.password);
  
 this.api.checkuserlogin(this.email,this.password).subscribe(data => {
   console.log("hi");
     console.log(data);
     if((data.docs[0].password == this.password))
     {
       alert("success!!")
      this.route.navigate(['splasher']);
     }
     else{
      // this.toastr.warning("Hi Patient wrong authentication,Please enter correct Email and Password");
      alert("Login authentication failed");
     }
    })
  
 }

}