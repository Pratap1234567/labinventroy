import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'userdash',component:UserDashboardComponent},
  {path:'userdash/edit-profile',component:EditProfileComponent},
  {path:'userdash/view-profile',component:ViewProfileComponent},
  {path:'userdash/equipment',component:EquipmentComponent},
  {path:'userdash/equipment/:pname',component:EquipmentComponent},
  {path:'userdash/change-password',component:ChangePasswordComponent},
  {path:'userdash/my-request',component:MyrequestComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
