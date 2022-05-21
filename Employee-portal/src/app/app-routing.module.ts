import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarrierWayComponent } from './carrier-way/carrier-way.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StartUpComponent } from './start-up/start-up.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
const routes: Routes = [
  {path:'adminlogin',component:AdminLoginComponent },
  {path:'userlogin',component:UserLoginComponent },
  {path:'sign-up',component:SignUpComponent },
  {path:'startup',component:StartUpComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'login',component:CarrierWayComponent},
  {path:'dashboard',component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
