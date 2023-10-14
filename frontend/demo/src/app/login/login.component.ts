import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public service:RestService,public router:Router,public AuthService:AuthService){}
  success:boolean=false;
  msg:string="";
  ngOninit():void{

  }
  user:User = new User();
  errorMessage!:string;
  duplicateUser:User = new User();
  login(){
    if(this.user.id==null){
      this.errorMessage = "user id can't be empty";
    }
    else if(this.user.password==null){
      this.errorMessage="password can't be left empty";
    }
    else
    {
      
      this.service.LoginUser(this.user).subscribe((data:any)=>{
        
        if(data!=null){
        this.duplicateUser = data;
        console.log(this.duplicateUser);
       //localstorage.setName(data.name)
        this.service.setFullUserDetails(data);
        this.AuthService.setUserId( this.duplicateUser.id);
        this.AuthService.setUserEmail(this.duplicateUser.email);
        this.AuthService.setUsername(this.duplicateUser.name);
        alert(this.duplicateUser.name);
        this.router.navigate(['/userdash']);
        }
       
      },(error)=>{
        alert("invalid credential");
      },()=>console.log("3sra wala"))
    }
  }

  isLoggedin(){
    return this.AuthService.isLoggedIn();
  }

}
