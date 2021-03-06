import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StartUpComponent } from './start-up/start-up.component';
import { HomeComponent } from './home/home.component';
import { SplasherComponent } from './splasher/splasher.component';
import { QueryComponent } from './query/query.component';
import { ApplyComponent } from './apply/apply.component';
import { AppliedUsersComponent } from './applied-users/applied-users.component';
import { EmployementComponent } from './employement/employement.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SalaryComponent } from './salary/salary.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { ApprovedComponent } from './approved/approved.component';
import { UserleaveComponent } from './userleave/userleave.component';
const routes: Routes = [
  {path:'adminlogin',component:AdminLoginComponent },
  {path:'userlogin',component:UserLoginComponent },
  {path:'sign-up',component:SignUpComponent },
  {path:'startup',component:StartUpComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:HomeComponent},
  {path:'splasher',component:SplasherComponent},
  {path:'query',component:QueryComponent},
  {path:'applied',component:AppliedUsersComponent},
  {path:'apply',component:ApplyComponent},
  {path:'employee',component:EmployementComponent},
  {path:'userdb',component:UserdashboardComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'salary',component:SalaryComponent},
  {path:'empsalary',component:EmployeeSalaryComponent},
  {path:'approved',component:ApprovedComponent},
  {path:'userleave',component:UserleaveComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
