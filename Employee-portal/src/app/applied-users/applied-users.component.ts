import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-applied-users',
  templateUrl: './applied-users.component.html',
  styleUrls: ['./applied-users.component.css']
})
export class AppliedUsersComponent implements OnInit {
  addform!:FormGroup;
  alldata:any;
  exchange!:any;
  object:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getuser();
  }
  erase (id:string,rev:string){
    this.api.deleteUser(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
  }
  getuser(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            this.object.push(i);
            console.log('Fetched successfuly in add component');
  
      }
    
    });
  }
}