import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm ,Validators} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent  {
  addform!:FormGroup;
  alldata:any;
  exchange!:any;
  object:any=[];
  val:any=[];
  constructor(private formbuilder:FormBuilder,private api:EmployeeServiceService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      userid:['',Validators.required],
      name:['',Validators.required],
      doj: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      month:['',Validators.required],
      leave:['',Validators.required],
      salary:['',Validators.required],
      _id:[''],  
      _rev:[''],
    })
  }
  uniqueidChange(arg:any){

    console.log(arg.target.value);
    let target = arg.target.value;
    this.api.uniqueidChanged(target).subscribe((data) => {
      console.log(data);
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);

      for(const i of this.alldata) {
        console.log(i.name);
        this.val.push(i.name);
        this.addform.controls['uniqueid'].setValue(i.name)
        this.object.push(i)
      }
    
    });
    

  }
  addSalary(formvalue:NgForm){
      console.log(formvalue);
      this.object.push(formvalue)
      this.api.addSalary(formvalue).subscribe(res=>{
      console.log("hello"+res);
      console.log("Your data was posted successfully!");
      location.reload()
    },rej=>{
      console.log("opps! Can not post data"+rej);
    });
  }
  getSalary(){
    this.object=[];
    this.api.getSalary().subscribe(data=>{
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
    this.api.deleteSalary(data._id,data._rev).subscribe(res=>{
      console.log("your data has deleted, please refresh the page");
      location.reload()
    
    },rej=>{
      console.log("oops can not delete"+rej);
    })

  }
  
  onEdit(obj:any){
    this.addform.controls['userid'].setValue(obj.userid);
    this.addform.controls['name'].setValue(obj.name);
    this.addform.controls['doj'].setValue(obj.doj);
    this.addform.controls['month'].setValue(obj.month);
    this.addform.controls['leave'].setValue(obj.leave);
    this.addform.controls['salary'].setValue(obj.salary);
    this.addform.controls['_id'].setValue(obj._id);
    this.addform.controls['_rev'].setValue(obj._rev);
  }

  update(formvalue:NgForm){
    console.log(formvalue);
    this.api.updateSalary(formvalue).subscribe(res=>{
      console.log("Your data was updated successfully!");
      location.reload()

    },rej=>{
      console.log("can not update....."+rej);
    })

  }
}
