import { Component,ElementRef } from '@angular/core';
import { FormGroup,FormBuilder,NgForm ,Validators} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { ToastarService } from '../toastar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  addform!:FormGroup;
  alldata:any;
  exchange!:any;
  object:any=[];
  flag=0;
  checkdate:any
  currentDate:any = new Date();
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService, private tostar:ToastarService,private el:ElementRef) { }

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
    });
    this.getuser();
  }
  checkAppointmentdate(event:any)
  {
    this.checkdate = event.target.value;
  }

  
  addEmployee(formvalue:NgForm){
      console.log(formvalue);
      this.object.push(formvalue)
      this.api.addEmployee(formvalue).subscribe(res=>{
      console.log("hello"+res);
      console.log("Your data was posted successfully!");
      this.tostar.showSuccess("data","Employee data was posted successfully!")
      setTimeout(() => {
        location.reload()
      }, 1000);

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
      this.tostar.showSuccess("data","data deleted successfullu..!")
       setTimeout(() => {
        location.reload()
       }, 700);
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
      this.tostar.showSuccess("data","Employee data updated successfully..!")
      setTimeout(() => {
        location.reload()
      }, 500);
    },rej=>{
      console.log("can not update....."+rej);
    })

  }
  idDuplicateCheck(event:any)
  {
    let id = event.target.value;
    for (const i of this.object) {
        if(i.id == id ){
              this.flag=1;          
        }
    }
    if(this.flag==1){
      this.tostar.showWarning("EMPID","ID Already taken")
      this.addform.controls['id'].setValue('');
      this.el.nativeElement.querySelector('#id').focus();
      this.flag=0;

    }
  }
}
