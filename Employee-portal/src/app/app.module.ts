import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarrierWayComponent } from './carrier-way/carrier-way.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StartUpComponent } from './start-up/start-up.component';
import { FotgotPassComponent } from './fotgot-pass/fotgot-pass.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    UserLoginComponent,
    SignUpComponent,
    CarrierWayComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    StartUpComponent,
    FotgotPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
