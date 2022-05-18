import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupform!:FormGroup;
  constructor(private api:EmployeeServiceService,private formbuilder:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group (
      {
       username:['',Validators.required],
       email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
       password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
       confirmpassword: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],

      }
    )
   
   }
   signupdata(FormValue:NgForm){
     this.api.registerdata(FormValue).subscribe((data)=>{
       alert("Data posted Successfully");
       this.signupform.reset();
     },rej=>{
       console.log("Error"+rej);
     });
     console.log(FormValue)
   }
}
