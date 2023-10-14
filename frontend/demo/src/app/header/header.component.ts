import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AuthService } from 'src/Services/auth.service';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService:AuthService,public router: Router, public service: RestService) { }

  ngOnInit(): void {
  }

  public isLoggedin() :boolean{
   
    return (this.authService.isLoggedIn());
  }

  public logout() {
    alert("LoggedOut SuccessFully")
    this.authService.clear();
    this.router.navigate(['']);
    this.service.setFullUserDetails(new User());
    return this.authService.clear();
  }
}
