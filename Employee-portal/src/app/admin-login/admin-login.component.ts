import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
    object: any = [];
    alldata: any;
    flag = 0;
    adminform!: FormGroup;
  
    constructor(
      private formbuilder: FormBuilder,
      private api:EmployeeServiceService,
      private router: Router,
    ) {}
  
    ngOnInit(): void {
      this.adminform = this.formbuilder.group({
        username: ['', [Validators.required]],
        password: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z0-9@!_]{10,}')],
        ],
      });
      this.api.getadmin().subscribe((data) => {
        console.log(data);
        this.alldata = data;
        this.alldata = this.alldata.docs;
        console.log(this.alldata);
        for (const i of this.alldata) {
          console.log(i);
          this.object.push(i);
        }
      });
    }
  
    adminlogin(formvalue: any) {
      for (const i of this.object) {
        if (
          i.username == formvalue.username &&
          i.password == formvalue.password
        ) {
          this.flag = 1;
        }
      }
      if (this.flag == 1) {
        this.router.navigate(['/dashboard']);
      } else {
      alert("Login authentication failed");
        location.reload();
      }
    }
}
