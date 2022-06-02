import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StartUpComponent } from './start-up/start-up.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { SplasherComponent } from './splasher/splasher.component';
import { QueryComponent } from './query/query.component';
import { ApplyComponent } from './apply/apply.component';
import { AppliedUsersComponent } from './applied-users/applied-users.component';
import { DepartmentComponent } from './department/department.component';
import { EmployementComponent } from './employement/employement.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    UserLoginComponent,
    SignUpComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    StartUpComponent,
    SplasherComponent,
    QueryComponent,
    ApplyComponent,
    AppliedUsersComponent,
    DepartmentComponent,
    EmployementComponent,
    UserdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
