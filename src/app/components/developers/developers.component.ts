import { Component, OnInit,Input,Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Developer} from '../../models/developers.model'
import {DeveloperService} from '../../services/developers.service'
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html'
})
export class DevelopersComponent implements OnInit{
    developers : Developer[] = [
      new Developer('Jakahusha mahali', 24, [])
    ];
    id:number;
    subscription: Subscription

    constructor(
      private developersService: DeveloperService,
      private loginService: LoginService
    ){}

    ngOnInit(){
      this.developersService.getDevelopers()
      .then((developers) => {
        this.developers = developers
      }
    );
    this.subscription = this.developersService.developersChanged
    .subscribe(
      (developers: Developer[]) => {
        this.developers = developers;
      }
    );
    }
    onEditItem(id:number){
      console.log("dit id klik je aan : " + id);
      this.developersService.startedEditing.next(id);
    }
}