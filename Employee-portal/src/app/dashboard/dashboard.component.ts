import { Component } from '@angular/core';
import { FormGroup,FormBuilder,NgForm ,Validators} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  addform!:FormGroup;
  alldata:any;
  exchange!:any;
  object:any=[]
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      id:['',Validators.required],
      username:['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      dob:['',Validators.required],
      mobileno: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      bloodgroup:['',Validators.required],
      doj:['',Validators.required],
      month:['',Validators.required],
      leave:['',Validators.required],
      salary:['',Validators.required],
      userlogin:['',Validators.required],
      userpassword:['',Validators.required],
      _id:[''],  
      _rev:[''],
    })
  }


  
  addEmployee(formvalue:NgForm){
      console.log(formvalue);
      this.object.push(formvalue)
      this.api.addEmployee(formvalue).subscribe(res=>{
      console.log("hello"+res);
      console.log("Your data was posted successfully!");
      location.reload()

    },rej=>{
      console.log("opps! Can not post data"+rej);
    });
  }
  getuser(){
    this.object=[];
    this.api.getEmployee().subscribe(data=>{
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
  delete(data:any){
    this.api.deleteEmployee(data._id,data._rev).subscribe(_res=>{
      console.log("your data has deleted, please refresh the page");
      location.reload()

    },rej=>{
      console.log("oops can not delete"+rej);
    })

  }
  
  onEdit(obj:any){
    this.addform.controls['id'].setValue(obj.id);
    this.addform.controls['username'].setValue(obj.username);
    this.addform.controls['email'].setValue(obj.email);
    this.addform.controls['dob'].setValue(obj.dob);
    this.addform.controls['mobileno'].setValue(obj.mobileno);
    this.addform.controls['bloodgroup'].setValue(obj.bloodgroup);
    this.addform.controls['doj'].setValue(obj.doj);
    this.addform.controls['month'].setValue(obj.month);
    this.addform.controls['leave'].setValue(obj.leave);
    this.addform.controls['salary'].setValue(obj.salary);
    this.addform.controls['userlogin'].setValue(obj.userlogin);
    this.addform.controls['userpassword'].setValue(obj.userpassword);
    this.addform.controls['_id'].setValue(obj._id);
    this.addform.controls['_rev'].setValue(obj._rev);
  }

  update(formvalue:NgForm){
    console.log(formvalue);
    this.api.updateEmployee(formvalue).subscribe(_res=>{
      console.log("Your data was updated successfully!");
      alert('your data was Updated successfully')
      location.reload()
    },rej=>{
      console.log("can not update....."+rej);
    })

  }
}
