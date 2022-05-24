import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];


  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      dob:['',Validators.required],
      mobileno:['',Validators.required],
      bloodgroup:['',Validators.required],
      _id:[''], 
      _rev:[''],
      })
     }
    
    
     
     addUser(formvalue:NgForm){
       console.log('hi');
       console.log(formvalue);
       this.store.push(formvalue)
       this.api.addUser(formvalue).subscribe(res=>{
        console.log("hello"+res);
        console.log("Your data was posted successfully!");
        // window.location.replace("/query")
        alert('your data is added successfully')
        },rej=>{
        console.log("opps! Can not post data"+rej);
        });
     }
     
}