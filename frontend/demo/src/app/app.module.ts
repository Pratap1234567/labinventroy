import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyrequestComponent } from './myrequest/myrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    CopyRightComponent,
    UserHeaderComponent,
    UserDashboardComponent,
    ContactUsComponent,
    EditProfileComponent,
    ViewProfileComponent,
    EquipmentComponent,
    ChangePasswordComponent,
    MyrequestComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
