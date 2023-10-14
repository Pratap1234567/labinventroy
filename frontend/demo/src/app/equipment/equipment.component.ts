import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Equipment } from 'src/Models/euipment';
import { EuipmentbookingRequest } from 'src/Models/euipmentbooking';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {

 
  image_url!:string;
  
  constructor(private service:RestService ,private authService:AuthService,private route:ActivatedRoute,private router:Router){}
  equipment:Equipment = new Equipment();
  equipmentList :Equipment[] = [];
  equipId:number=1;
  uid!:number;
  quantityNeeded!:number;
  searchmode!:boolean;
  showError:boolean=false;

  request:EuipmentbookingRequest= new EuipmentbookingRequest();
  ngOnInit(){

      if(localStorage.length==0){
        this.router.navigate(['login']);
      }
       this.route.paramMap.subscribe(()=>{
         this.getEquipmentByPname();
       })
  }
  
  getEquipmentByPname(){
    this.searchmode=this.route.snapshot.paramMap.has('pname');
    if(this.searchmode){
      this.handleSearch();
    }
    else{
      this.getAllProducts();
    
    }
  }
  dosearch(ele:string){
   this.router.navigateByUrl(`userdash/equipment/${ele}`);
  }



  handleSearch(){
    const key:any = this.route.snapshot.paramMap.get('pname');
    this.service.getEquipmentListByCategory(key).subscribe((data)=>{
      this.equipmentList=data;
      
      if(this.equipmentList.length!=0){
        this.showError=false;
      }
      if(this.equipmentList.length==0){
        this.showError=true;
        this.service.getAllEquipment().subscribe((data)=>{
          this.equipmentList=data;
        },(error)=>{
          console.log(error);
        })
      }
      
    },
    (err)=>{
      console.log(err);
    })
  }
  getAllProducts(){
    this.service.getAllEquipment().subscribe((data)=>{
      //  alert("data came");
        this.equipmentList=data;
        console.log(data);
     },(error)=>alert("something went wrong"),()=>{console.log("list fetched successfully");})

  }
  sendRequest(item:Equipment,ele:string):void {
    this.quantityNeeded=parseInt(ele);
    // alert(item.quantity);
    // alert(this.quantityNeeded);
    if(ele ==""){
      alert("please enter some quantity");
    }
    else if(this.quantityNeeded <1 ){
      alert("quntity should not be negative or zero");
    }
    else if(this.quantityNeeded > item.quantity){
      alert("alert quantity you are demanding is greater than quantity we have");
    }
    else{
      this.request.equipmentId=item.id;
      this.request.equipmentName=item.name;
      this.request.quantityNeeded=this.quantityNeeded;
      this.request.userName=this.authService.getUsername();
      this.request.status="Pending";
      this.uid=this.authService.getUserId();
      this.service.sendRequest(this.uid,this.request).subscribe((data)=>{
        alert("Request sent successfully");
      },
      (err)=>{
        console.log(err);
      });
    }
  }
   
  

  
 
  
}

