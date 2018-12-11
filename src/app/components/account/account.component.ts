import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    users: User[] = [
     new User('','','','')
    ]
  constructor(private registerService:RegisterService, private loginService:LoginService) { }

  ngOnInit() {
    this.registerService.getUsers()
      .then((users) => {
        this.users = users
      }
    );
  }

}
