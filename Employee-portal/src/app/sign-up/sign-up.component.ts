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
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private api:EmployeeServiceService,private formbuilder:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group (
      {
       username:['',Validators.required],
       email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z0-9@_]{6,}")]],
      // confirmpassword: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
      },
    //   {
    //     Validators:this.mustmatch('password','confirmpassword')
    //   }
    )
   
   }
//    mustmatch(controlName:string,confirmpassword:string){
//      return (formGroup:FormGroup)=>{
//        const control=formGroup.controls[controlName];
//        const matchingcontrol=formGroup.controls[confirmpassword];
//        if(matchingcontrol.errors && ! matchingcontrol.errors.mustmatch ){
//          return
//        }
//        if(control.value != matchingcontrol.value){
//         matchingcontrol.setErrors(this.mustmatch:true)
//        }
//      }

//    }
   signupdata(FormValue:NgForm){
     this.api.registerdata(FormValue).subscribe((data)=>{
       alert("Data posted Successfully");
       this.signupform.reset();

     },rej=>{
       console.log("Error"+rej);
     });
    //  console.log(typeof(FormValue));
     console.log(FormValue);


   }
  
 
}