import { getLocaleDirection } from '@angular/common';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { SharedService } from '../service/shared.service';
import { ToastarService } from '../toastar.service';
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
  date1:any; 
  date2:any;  
obj:any;
storeId:any;
createObj:any;
detailsCheck:any=0;


  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService,private shared:SharedService, private toatr:ToastarService) { }

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
      type1:['',Validators.required],
      _id:[''], 
      _rev:[''],
      });
      this.setField();
     }
     checkAppointmentdate(event:any)
     {
       this.checkdate = event.target.value;
     }
    //  getToday(): string {
    //   return new Date().toISOString().split('T')[0]
    // }
     
     addUser(formvalue:any){
       console.log('hi');
       console.log(formvalue);
       this.store.push(formvalue);
       console.log("called");
       this.api.getEmployee().subscribe(res=>{
       console.log("called inside");

        this.obj=res;
        this.obj=this.obj.docs;
        console.log(this.obj);
        for (const iterator of this.obj) {
          if(iterator.id==formvalue.empid && iterator.username==formvalue.firstname){
            this.detailsCheck=1;
            this.storeId=iterator._id;
            this.createObj={
              empid:formvalue.empid,
              firstname:formvalue.firstname,
              email:formvalue.email,
              fromdate:formvalue.fromdate,
              todate: formvalue.todate,  
              days:formvalue.days,
              mobileno: formvalue.mobileno,
              type1: formvalue.type1,
              reason:formvalue.reason,
              employee_id:iterator._id,
            }
            this.api.addUser(this.createObj).subscribe(res=>{
              console.log("Added successfully",res);

            },rej=>{
              console.log("cannot add employee leave",rej);
            })
          }
        }
        console.log(this.createObj);

       });
       setTimeout(() => {
         if(this.detailsCheck==1){
           this.toatr.showSuccess("data","Leave applied successfully..!")
          //  setTimeout(() => {
          //    location.reload();
             
          //  }, 1000);
         }
         else{
          this.toatr.showWarning("data","Invalid user data ..?")
           
         }
       }, 1000);

      //  this.api.addUser(formvalue).subscribe(res=>{
      //   console.log("hello"+res);
      //   console.log("Your data was posted successfully!");
      //   // window.location.replace("/query")
      //   alert('your data is added successfully')
      //   },rej=>{
      //   console.log("opps! Can not post data"+rej);
      //   });
     }
     checkFirstdate(event:any)
     {
       this.date1 = event.target.value;
     }
     calculatedate(event:any){

      this.date2 = event.target.value;
      let setval = new Date(this.date1); 
      let setvalone = new Date(this.date2); 
      
        let Time = setvalone.getTime() - setval.getTime(); 
        let Days = Time / (1000 * 3600 * 24); //Diference in Days
        console.log("days",Days);
        if(Days <=30)
        {
        this.addform.controls['days'].setValue(Days);
        }
      
     }
    setField(){
      this.addform.controls['empid'].setValue(this.shared.setEmployeeDetails.id);
      this.addform.controls['firstname'].setValue(this.shared.setEmployeeDetails.username);
      this.addform.controls['email'].setValue(this.shared.setEmployeeDetails.email);
      this.addform.controls['mobileno'].setValue(this.shared.setEmployeeDetails.mobileno);

    }
     
}