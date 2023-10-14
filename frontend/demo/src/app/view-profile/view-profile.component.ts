import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/Models/address';
import { User } from 'src/Models/user';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  constructor(public service:RestService,public router:Router,public authService:AuthService){}
  user:User = new User();
  uid!:number;

  ngOnInit(){

    if(localStorage.length==0){
      this.router.navigate(['login']);
    }

    this.uid=this.authService.getUserId();
    this.service.getUserById(this.uid).subscribe((data)=>{
      this.user = data;
      // alert(this.user.address.);
    },
    (err)=>{
      console.log(err); 
    }
    );
    
  }


  isLoggedin(){
    return this.authService.isLoggedIn();
  }
}
