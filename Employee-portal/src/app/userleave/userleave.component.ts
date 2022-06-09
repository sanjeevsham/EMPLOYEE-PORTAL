import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-userleave',
  templateUrl: './userleave.component.html',
  styleUrls: ['./userleave.component.css']
})
export class UserleaveComponent implements OnInit {
  userid:any;
  UserId:any;
  value: any;
  constructor(private api:EmployeeServiceService) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem('userId');
    this.UserId = JSON.parse(this.userid);
   this.getleavedetails();
  }
  getleavedetails(){
  
  

    this.api.getleaveapproved(this.UserId).subscribe((data)=>{
      this.value = data
      this.value = this.value.docs
      console.log(this.value);
    })
  }
}
