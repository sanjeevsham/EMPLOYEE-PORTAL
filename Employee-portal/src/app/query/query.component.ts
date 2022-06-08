import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastarService } from '../toastar.service';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  addform!:FormGroup;
  alldata:any;
  exchange!:any;
  object:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private route:Router,private tostr:ToastarService) { }

  ngOnInit(): void {
    this.getQuery();
  }
  getQuery(){
    this.api.getQuery().subscribe(data=>{
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
  
  delete(data:any,data1:any){
    this.api.deleteQuery(data._id,data._rev).subscribe(_res=>{
      console.log("your data has deleted, please refresh the page");
      this.tostr.showSuccess("delete"," deleted successfully")
      setTimeout(() => {
        location.reload();
      }, 300);
    },rej=>{
     
      console.log("oops can not delete"+rej);
    })

  }
  
  // onEdit(row:any){
  //   // console.log(row);
  //   // this.route.navigate(['contactus']);
  //   this.addform.controls['firstname'].setValue(row.firstname);
  //   this.addform.controls['lastname'].setValue(row.lastname);
  //   this.addform.controls['email'].setValue(row.email);
  //   this.addform.controls['mobileno'].setValue(row.mobileno);
  //   this.addform.controls['query'].setValue(row.query);
  //   this.addform.controls['_id'].setValue(row._id);
  //   this.addform.controls['_rev'].setValue(row._rev);
  // }
}