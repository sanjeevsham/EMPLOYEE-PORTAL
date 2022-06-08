import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { ToastarService } from '../toastar.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];


  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private tostr:ToastarService) { }

  ngOnInit(): void {
      this.addform=this.formbuilder.group({
       firstname:['',Validators.required],
       lastname:['',Validators.required],
       email:['',Validators.required],
       mobileno: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
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
        this.tostr.showSuccess("data","Query added successfully")
        setTimeout(() => {
        location.reload()
          
        }, 1000);

        },rej=>{
        console.log("opps! Can not post data"+rej);
        });
     }
     
}