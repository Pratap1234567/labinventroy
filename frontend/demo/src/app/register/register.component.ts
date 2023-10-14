import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
      public success:boolean=false;
      constructor(public service:RestService,public router:Router){
        
      }

      user = new User();
      phoneno!:number;
      error!:string;
      ngOnInit():void{}
      validateEmail(email:string):boolean{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      register(){
       
        if(!this.user.email || !this.user.id ||!this.user.password ||!this.user.phone|| !this.user.name){
          this.error = "one or more fields are empty";
        }
        else if(isNaN(Number(this.user.phone)  )){
          this.error="phone no should be number only";
        }
      
        else if(isNaN(Number(this.user.id)  )){
          this.error="id should be number only";
        }
        else if(this.user.id.toString().length >8){
          this.error="you can enter upto 8 digit userId only";
        }
        else if(parseInt(this.user.phone) < 0){
            this.error="phone no can't be negative"
        }
        else if(this.user.id < 1){
          this.error="id should not be 0 or negative";
        }
        else if(this.user.phone.length!=10){
          this.error="phone no length should be 10 only";
        }
        else if(!(this.validateEmail(this.user.email))){
            this.error="email is invalid";
        }
        else if(this.user.password.trim().length==0){
          this.error="password should not be spaces";
        }
        else{
          this.service.registerUser(this.user).subscribe((d)=>{
            alert("successfully registered");
            this.router.navigate(['login']);
            console.log(d);
          },f => {console.log(f);alert("user already exist");this.ngOnInit()},()=>console.log("successfully registered"));
        }
        
      }

}
