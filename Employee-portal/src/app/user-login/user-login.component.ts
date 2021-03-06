import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../employee-service.service';
import { SharedService } from '../service/shared.service';
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
  userlogin:'',
  userpassword:''
}
 
  constructor(private fb:FormBuilder,private api:EmployeeServiceService,private route:Router,private toasterService:ToastrService,private shared:SharedService) { 
    this.formgroup = this.fb.group({
      userlogin : [this.emp.userlogin],
      userpassword : [this.emp.userpassword]
    })
   }

  
  ngOnInit(): void {
    this.formgroup = this.fb.group({
      userlogin:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      userpassword:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }
login(obj:any){
  this.userlogin=obj.userlogin
  this.userpassword=obj.userpassword 
  console.log(this.userlogin);
  console.log(this.userpassword);
  
 this.api.checkuserlogin(this.userlogin).subscribe(data => {
   console.log("hi");
     console.log(data);
     this.sample=data
     this.temp=this.sample.docs
     this.id=this.temp[0]._id
     localStorage.setItem("userId",JSON.stringify(this.id));
      this.shared.loginUserId=this.id;
           if((data.docs[0].userpassword == this.userpassword))
     {
      this.route.navigate(['/userprofile']);
      this.showmsg();
     }
     else{
      location.reload();
      alert("invalid user")
       this.showear();
     }
    })
  
 }

 showmsg()
 {
   this.toasterService.success("Logged In Successfully !!!");
 }
 showear()
 {
   this.toasterService.error("invalid admin");
   
 }
}