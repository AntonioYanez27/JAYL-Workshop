import { Component } from '@angular/core';
import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MI-PROYECTO-JAYL';

  
  constructor(private autService : AuthenticationService, private router: Router){

  }

  isAuthenticated(): boolean{
    return this.autService.isLoggedIn();
  }

  cerrarSesion():void{
    this.autService.logout();
    this.router.navigate(['/login']);
  }

}