import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
   constructor(private service :RestService,private authService:AuthService,private router:Router){}

   oldPassword!:string;
   newPassword!:string;
   confirmPassword!:string;
   uid!:number;
   errorMessage!:string;
   user:User = new User();
   ngOnInit(){

    if(localStorage.length==0){
      this.router.navigate(['login']);
    }

    this.uid=this.authService.getUserId();
       this.service.getUserById(this.uid).subscribe((data)=>{
         this.user=data;
       },(err)=>{
         console.log(err)
       });
   }
 
    
   changePassword(){
     if((!this.oldPassword) || (!this.confirmPassword) || (!this.newPassword)){
       this.errorMessage="one or more fields are empty";
     }
     else if(this.newPassword!=this.confirmPassword){
       this.errorMessage=" new password and confirm password are not same ";
     }
     else if(this.newPassword==this.oldPassword){
       this.errorMessage="you are still enetering your old password in place of new password"
     }
     else{
       this.uid=this.authService.getUserId();
       this.service.getUserById(this.uid).subscribe((data)=>{
         this.user=data;
       },(err)=>{
         console.log(err)
       });

       if(this.user.password!=this.oldPassword){
         this.errorMessage="you have entered wrong current password";
       }
       else{
         this.user.password=this.newPassword;
         this.service.changePassword(this.user).subscribe((data)=>{
          if(data!=null){
            console.log(data);
            alert("password changed successfully");
            this.router.navigate(['/userdash']);
          }
          else{
            alert("password does not change some error occured ");
          }
        },
        (err)=>{
          console.log(err)
        });
       }
     }
   }

}
