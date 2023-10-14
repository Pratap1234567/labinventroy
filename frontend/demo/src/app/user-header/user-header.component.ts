import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  constructor(public authService:AuthService,public service :RestService,public router:Router){}
  uname!:string;
  ngOninit(){
   
    if(localStorage.length==0){
      this.router.navigate(['login']);
    }
    else{
      this.service.getUserById(this.authService.getUserId()).subscribe(data=>{
        this.uname=data.name;
        console.log(" ye aaya data");

        alert(this.uname);
      },(error)=>{
        console.log(error);
      })
    }
   
  }

  user :User = new User();
  public isLoggedin() :boolean{
    this.uname=this.authService.getUsername();
    return (this.authService.isLoggedIn());
  }
   
  
  public logout() {
    alert("LoggedOut SuccessFully")
    this.authService.clear();
    this.router.navigate(['']);
    this.service.setFullUserDetails(this.user);
    return this.authService.clear();
  }
}
