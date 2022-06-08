import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  userId: any
  user: any;

  constructor(private data:EmployeeServiceService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")
    let parse=JSON.parse(this.userId);
    console.log(this.userId)
    this.data.getDataById("employee-details",parse).subscribe(res=>{
      console.log(res)
      this.user=res
    },rej=>{
      alert("sorry Cant get Data"+rej)
    })
  }
 
}
