import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
formgroup!:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formgroup=this.formbuilder.group (
      {
       username:['',Validators.required],
       password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],

      }
    )
   }

}
