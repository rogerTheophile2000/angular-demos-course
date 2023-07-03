import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:User[] =[];
  
  constructor(private reqresService : ReqresService, private router:Router){
    this.getUsers();
  }

  getUsers(){
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
        console.log(res);
      },
      (err) => {
        console.error(err);
        
      }
    );
  }

  userDetails( id: number ) {
    this.router.navigate( ['user', id] );
  }
}
