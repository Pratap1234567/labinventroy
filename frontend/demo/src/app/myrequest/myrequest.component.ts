import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EuipmentbookingRequest } from 'src/Models/euipmentbooking';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.css']
})
export class MyrequestComponent {
   constructor(private service:RestService,private authService :AuthService,private router:Router){}
   equipmentBookingRequestList:EuipmentbookingRequest[]=[];
   isAnyEquipmentRegistered:boolean=false;
   errorMessage!:string;

   uid!:number;
   ngOnInit(){

  if(localStorage.length==0){
    this.router.navigate(['login']);
  }
    this.equipmentBookingRequestList=[];

    this.uid = this.authService.getUserId();
    this.service.getUserById(this.uid).subscribe((data)=>{
      this.equipmentBookingRequestList= data.registeredEquipmentList;
       if(this.equipmentBookingRequestList.length!=0){
         this.isAnyEquipmentRegistered=true;
       }
       else{
        this.isAnyEquipmentRegistered=false;
        this.errorMessage="No Equipment Registered Yet!";
       }
      
    },
    (err)=>{
      this.errorMessage="No Equipment Registered Yet!";
    })

   }
}
