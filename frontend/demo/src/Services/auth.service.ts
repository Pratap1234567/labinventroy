import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public setroles(role: string) {
    localStorage.setItem('role', role)
  }

  public getroles() {
    return localStorage.getItem('role');
  }
  public setUserId(userId:Number):void{
    localStorage.setItem('userId',userId.toString());
  }

  public getUserId(){
    const storeUserId :string |null=localStorage.getItem('userId');
    if(storeUserId){
      const userId:number = Number(storeUserId);
      return userId;
    }
    return -1;
  }
  public setUserEmail(email:string){
    localStorage.setItem('email',email);
  }

  public getUserEmail(){
    return localStorage.getItem('email');
  }

  public setUsername(uname:string){
    localStorage.setItem('username',uname);
  }
  
  public getUsername(){
    const uname:string|null= localStorage.getItem('username');
    if(uname){
      return uname;
    }
    else{
      return "";
    }
  }

  public clear() {
    localStorage.clear();
  }

  // public isLoggedIn() {
  //   return this.getroles() && this.getToken()
  // }
  public isLoggedIn():boolean{
    return (this.getUserEmail()!=null);
  }

}
