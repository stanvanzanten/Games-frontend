import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GameService } from '../../../services/games.service';
import { Subscription } from 'rxjs';
import { Game } from '../../../models/games.model';
import { Developer } from '../../../models/developers.model';
import { DeveloperService } from '../../../services/developers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.css']
})
export class GameEditComponent implements OnInit {
  developers: Developer[] = [
  ];

  @ViewChild("f") gameForm: NgForm;
  id: number;
  editMode = false;
  // concertsForm: FormGroup;
  subscription: Subscription;
  editedItemId: number;
  editedItem: Game;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameService,
    private developerService: DeveloperService
  ) { }

  ngOnInit() {
    this.developerService.getDevelopers()
      .then((developers) => {
        this.developers = developers
      }
      );
    this.subscription = this.gameService.startedEditing
      .subscribe(
        (id: number) => {

          this.editedItemId = id;

          this.editMode = true;

          this.gameService.getGame(id)
            .then(games => {
              this.editedItem = games
              this.gameForm.setValue({
                imageUrl: this.editedItem.imageUrl,
                name: this.editedItem.name,
                releaseDate: this.editedItem.releaseDate,
                genre: this.editedItem.genre,
                description: this.editedItem.description,
                developer: this.editedItem.developer
              })
            })
            .catch(error => console.log(error));
        });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newGame = new Game(value.imageUrl, value.name, value.releaseDate, value.genre, value.description, value.developer);
    if (this.editMode) {
      this.gameService.updateGames(this.editedItemId, newGame);
    } else {
      this.gameService.addGame(newGame);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.gameService.deleteGame(this.editedItemId);
    this.onClear();
  }

  onClear() {
    this.gameForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEditItem(id: number) {
    console.log("dit id klik je aan : " + id);
    this.developerService.startedEditing.next(id);
  }
}