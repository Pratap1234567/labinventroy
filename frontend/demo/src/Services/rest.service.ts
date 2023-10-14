import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { AuthService } from './auth.service';
import { User } from 'src/Models/user';
import { Observable } from 'rxjs';
import { Equipment } from 'src/Models/euipment';
import { EuipmentbookingRequest } from 'src/Models/euipmentbooking';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient,private AuthService:AuthService) { }
     requestHeaders = new HttpHeaders({
    "no-Auth":"True"
});
  user:User = new User();

  users!: User[];
  username!:string;
  baseUrl:string="http://localhost:1005";
 

//<-------------------------------------------User Section---------------------------------------------------------->


//for registration
  public registerUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:1005/register",user);
  }

//for setting details of user
  public setFullUserDetails(userdetails: User) {
    this.user = userdetails;
  }
  
  //to get user details which we saved
  public getUserDetails():User{
    return this.user;
  }

  //to get user by Id
  public getUserById(uid:number):Observable<User>{
    return this.http.get<User>(`http://localhost:1005/getUserById/${uid}`);
  }

  //for login
  public LoginUser(user:User):Observable<User>{
    return this.http.get<User>(`http://localhost:1005/login/${user.id}/${user.password}`);
  }

  //for Changing Password
  public changePassword(user:User){
    return this.http.put(`http://localhost:1005/updatePassword`,user);
  }

  //for updating User Profile
  public updateProfile(user:User):Observable<string>{
    return this.http.put<any>(`http://localhost:1005/updateProfile`,user);
  }
   

  //*******************************     Equipment Section     ********************************
  //for getting all equipment in inventory
  public getAllEquipment():Observable<Equipment[]>{
    return this.http.get<Equipment[]>("http://localhost:1005/getAllEquipment");
  }

  //for getting Equipment By Category
public  getEquipmentListByCategory(category:string):Observable<Equipment[]>{
  return this.http.get<Equipment[]>(`http://localhost:1005/getAllEquipmentByCategory/${category}`);
}


// for Sending Request
  public sendRequest(uid:number,request:EuipmentbookingRequest):Observable<any>{
    return this.http.put<any>(`http://localhost:1005/equipmentBooking/${uid}`,request);
  }

 





}