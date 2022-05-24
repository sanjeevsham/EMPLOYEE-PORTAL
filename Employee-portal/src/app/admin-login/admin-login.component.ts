import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  successMessage: string = '';
  adminform!: FormGroup;
  empRecord: any = {
    username: '',
    password: '',
   };
  
  constructor(
    private formbuilder: FormBuilder,
    private api: EmployeeServiceService,
    private router: Router
  ) {
    this.adminform = this.formbuilder.group({
      username: ['', Validators.required],
      // password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
      password: ['',[Validators.required]]

    });
  }

  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
    username: ['', Validators.required],
    // password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
    password: ['',[Validators.required]]
  });
}

  alogin(FormValue: any) {
    console.log(FormValue.username);
    this.api.getdata(FormValue.username).subscribe((data: any) => {
      console.log(data);
      const adminData= data.docs[0];
   if (
  adminData.id== FormValue.username &&
  adminData.password == FormValue.password
   ) {
  this.router.navigate(['dashboard']);
  alert('Verified');
   } else {
  alert('err');
   }
  });
  console.log(FormValue);
  }

  get username() {
    return this.adminform.get('username');
  }
  get password() {
    return this.adminform.get('password');
  }
}
