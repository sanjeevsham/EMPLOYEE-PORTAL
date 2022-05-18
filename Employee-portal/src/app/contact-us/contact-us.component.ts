import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  signupform!:FormGroup;
  
  constructor(private formbuilder:FormBuilder) { }

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
}
