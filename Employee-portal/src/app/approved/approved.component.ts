import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastarService } from '../toastar.service';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  alldata:any;
  exchange!:any;
  object:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private route:Router,private tostr:ToastarService) { }

  ngOnInit(): void {
    this.getapproved();
  }
  getapproved(){
    this.api.getapproved().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            this.object.push(i);
            console.log('Fetched successfuly in add component')
  
      }
    
    });
  }
  delete(data:any,_data1:any){
    this.api.deleteapproved(data._id,data._rev).subscribe(_res=>{
      console.log("your data has deleted, please refresh the page");
      this.tostr.showSuccess("delete"," deleted successfully")
      setTimeout(() => {
        location.reload();
      }, 300);
    },rej=>{
     
      console.log("oops can not delete"+rej);
    })

  }

}
