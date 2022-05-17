import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  formgroup!:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formgroup=this.formbuilder.group (
      {
        username:['',Validators.required],
       password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]

      }
    )
   }
}
