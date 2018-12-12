import { Component, OnInit,Input,Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Game} from '../../models/games.model'
import {GameService} from '../../services/games.service'
import { Subscription } from 'rxjs';
import { Developer } from 'src/app/models/developers.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit{
    games : Game[] = [
    ];
    id:number;
    subscription: Subscription

    constructor(
      private gamesService: GameService,
      private loginService: LoginService
    ){}

    ngOnInit(){
      this.gamesService.getGames()
      .then((games) => {
        this.games = games
      }
    );
    this.subscription = this.gamesService.gamesChanged
    .subscribe(
      (games: Game[]) => {
        this.games = games;
      }
    );
    }
    onEditItem(id:number){
      console.log("dit id klik je aan : " + id);
      this.gamesService.startedEditing.next(id);
    }
}