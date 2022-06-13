import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastarService } from '../toastar.service';
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
  sno:number=1;
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private route:Router, private tostr:ToastarService) { }

  ngOnInit(): void {
    this.getuser();
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
            this.sno++;
            console.log('Fetched successfuly in add component');
      }
    
    });
  }

  approve(obj:any,obj1:any){
    obj.approved = "Leaveapproved";
    this.api.addapproved(obj,obj1).subscribe(res=>{ 
    console.log("hello"+res);
    console.log("Your data was posted successfully!"); 
    location.reload()

  },rej=>{
    console.log("opps! Can not post data"+rej);

  }
  );
}
  delete(data:any,_data1:any){
    this.api.deleteQuery(data._id,data._rev).subscribe(_res=>{
      console.log("your data has deleted, please refresh the page");
      this.tostr.showSuccess("delete"," deleted successfully")
      setTimeout(() => {
      location.reload();
        
      }, 1000);

    },_rej=>{
    
      this.tostr.showError("delete","data not deletsd")
    })

  }
}
