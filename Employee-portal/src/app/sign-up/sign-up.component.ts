import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupform!:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.signupform=this.formbuilder.group (
      {
       username:['',Validators.required],
       password: ['',Validators.required],
       email:['',Validators.required],
       confirmpassword:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
   
   }

}
