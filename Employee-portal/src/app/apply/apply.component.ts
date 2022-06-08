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
  checkdate:any
  currentDate:any = new Date();


  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      empid:['',Validators.required],
      firstname:['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      fromdate:['',Validators.required],
      todate: ['', [Validators.required,]],  
      days:['',Validators.required],
      mobileno: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      reason:['',Validators.required],
      _id:[''], 
      _rev:[''],
      })
     }
     checkAppointmentdate(event:any)
     {
       this.checkdate = event.target.value;
     }
    //  getToday(): string {
    //   return new Date().toISOString().split('T')[0]
    // }
     
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

     calculatedate(event:any){

      let date1, date2;  
      date1 = new Date("");  
      date2 = new Date("");  
 
      let time_difference = date2.getTime() - date1.getTime();  
 
      let days_difference = time_difference / (1000 * 60 * 60 * 24);  
        
      document.write(days_difference + " days");  
     }
    
     
}