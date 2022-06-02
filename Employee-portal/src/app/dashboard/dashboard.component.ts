import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm ,Validators} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      id:['',Validators.required],
      username:['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      dob:['',Validators.required],
      mobileno:['',Validators.required],
      bloodgroup:['',Validators.required],
      userlogin:['',Validators.required],
      userpassword:['',Validators.required],
      _id:[''],  
      _rev:[''],
    })
  }


  
  addEmployee(formvalue:NgForm){
      console.log(formvalue);
      this.store.push(formvalue)
      this.api.addEmployee(formvalue).subscribe(res=>{
      console.log("hello"+res);
      console.log("Your data was posted successfully!");
      alert('your data is added successfully')
    },rej=>{
      console.log("opps! Can not post data"+rej);
    });
  }
  getuser(){
    this.store=[];
    this.api.getEmployee().subscribe(res=>{
      console.log(res);
      console.log("response is comming");
      this.alluser=res;
      this.alluser=this.alluser.rows;
      console.log(this.alluser);
      for (const key in this.alluser) {
            if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
              const element = this.alluser[key];
              console.log(element.id);
              this.api.getAllEmployee(element.id).subscribe(res=>{
                console.log(res);
                this.exchange=res;
                this.store.push(this.exchange);
                console.log("data receved");
              },rej=>{
                console.log("error"+rej);
              })
            
            }
          }
    },rej=>{
        console.log("opps! Somthing went wrong"+rej);
    })
  }
  
  delete(data:any){
    this.api.deleteEmployee(data._id,data._rev).subscribe(res=>{
      console.log("your data has deleted, please refresh the page");
      alert('your data was deleted successfully')
    },rej=>{
      console.log("oops can not delete"+rej);
    })

  }
  
  onEdit(row:any){
    this.addform.controls['id'].setValue(row.id);
    this.addform.controls['username'].setValue(row.username);
    this.addform.controls['email'].setValue(row.email);
    this.addform.controls['dob'].setValue(row.dob);
    this.addform.controls['mobileno'].setValue(row.mobileno);
    this.addform.controls['bloodgroup'].setValue(row.bloodgroup);
    this.addform.controls['userlogin'].setValue(row.userlogin);
    this.addform.controls['userpassword'].setValue(row.userpassword);
    this.addform.controls['_id'].setValue(row._id);
    this.addform.controls['_rev'].setValue(row._rev);
  }

  update(formvalue:NgForm){
    console.log(formvalue);
    this.api.updateEmployee(formvalue).subscribe(res=>{
      console.log("Your data was updated successfully!");
      alert('your data was Updated successfully')
    },rej=>{
      console.log("can not update....."+rej);
    })

  }
}
