import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];


  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService) { }

  ngOnInit(): void {
      this.addform=this.formbuilder.group({
       firstname:['',Validators.required],
       lastname:['',Validators.required],
       email:['',Validators.required],
       mobileno:['',Validators.required],
       query:['',Validators.required],
       _id:[''],
       _rev:[''],
      })
     }
    
    
     
     addQuery(formvalue:NgForm){
       console.log('hi');
       console.log(formvalue);
       this.store.push(formvalue)
       this.api.addQuery(formvalue).subscribe(res=>{
        console.log("hello"+res);
        console.log("Your data was posted successfully!");
        window.location.replace("/query")
        alert('your data is added successfully')
        },rej=>{
        console.log("opps! Can not post data"+rej);
        });
     }
     
}