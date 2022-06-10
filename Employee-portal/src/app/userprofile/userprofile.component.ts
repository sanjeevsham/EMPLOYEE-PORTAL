import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  employeeDetails:any;
  userId:any;
  constructor(private route:Router,private shared:SharedService,private api:EmployeeServiceService) {
console.log()

   }

  ngOnInit(): void {
console.log()


  }

  out() {
    localStorage.clear();
    this.route.navigate(['/userlogin']);
  }
  setValue(){
    console.log("called");
    let parse:any=localStorage.getItem("userId");
    console.log(parse);
    let paresedValue:any=JSON.parse(parse);
    console.log(paresedValue)
    this.api.getadminId(paresedValue).subscribe(res=>{
      this.employeeDetails=res;
      console.log(this.employeeDetails);
      this.shared.setEmployeeDetails=this.employeeDetails;
      console.log(this.employeeDetails);
      this.route.navigate(['/apply']);
    })
  }

}
