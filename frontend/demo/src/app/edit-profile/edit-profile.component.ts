import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/Models/address';
import { User } from 'src/Models/user';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  constructor(private service:RestService,private router:Router,private authService:AuthService){}
  
  user :User = new User();
  address:Address = new Address();
  errorMessage!:string;
  uid!:number; 


  ngOnInit(){

    if(localStorage.length==0){
      this.router.navigate(['login']);
    }
    this.uid=this.authService.getUserId();
    this.service.getUserById(this.uid).subscribe((data)=>{
      this.user = data;
      console.log(this.user);
  
      if(this.user.address.city==null && this.address.country==null && this.address.houseno==null && this.address.pincode==null && this.address.state==null && this.address.streetName==null){
        this.user.address.city="";
        this.user.address.country="";
        this.user.address.houseno="";
        this.user.address.pincode="";
        this.user.address.state="";
        this.user.address.streetName="";
      }
      this.address=this.user.address;
      // alert(this.user.address.);
    },
    (err)=>{
      console.log(err);
    }
    );
    
  }
  change(){
    this.router.navigate(['userdash/change-password']);
  }

 
  updateProfile(){
     this.user.address=this.address;
    console.log(this.user.address.city);
    if((!this.address.city) || (!this.address.country )|| (!this.address.houseno )|| (!this.address.pincode) || (!this.address.state )|| (!this.address.streetName)){
      this.errorMessage="there is one or more empty field ";
    }
    else if(isNaN(Number(this.user.phone)  )){
      this.errorMessage="phone no should be number only";
    }
    else if(parseInt(this.address.houseno) <0){
      this.errorMessage="house no can not be negative";
    }
    else if(this.user.phone.length!=10){
      this.errorMessage="phone no length should be 10 only";
    }
    else if(isNaN(parseInt(this.address.houseno))){
      this.errorMessage="house no should be number only"
    }
    else if(isNaN(parseInt(this.address.pincode))){
      this.errorMessage="pincode should be number only";
    }
   
    else{
      this.service.updateProfile(this.user).subscribe((data)=>{
        alert("profile update successfully");
      },
      (err)=>{
      console.log(err)
      });
    }
    }


 

}
