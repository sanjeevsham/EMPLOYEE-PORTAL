import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  userId: any
  user: any;
  temp: any;
  constructor(private data:EmployeeServiceService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")
    let parse=JSON.parse(this.userId);
    console.log(this.userId)
    this.data.getDataById("employee-details",parse).subscribe(res=>{
      console.log(res)
      this.user=res
      this.data.getByType("salary").subscribe(Response=>{
        console.log(Response);
        this.temp=Response
       console.log(this.temp)
      })
    },rej=>{
      alert("sorry Cant get Data"+rej)
    })
  }
 

}
