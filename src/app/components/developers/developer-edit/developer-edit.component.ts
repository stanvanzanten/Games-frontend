import { Component, OnInit, ViewChild } from '@angular/core';
import { Developer } from 'src/app/models/developers.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/games.model';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/games.service';
import { DeveloperService } from 'src/app/services/developers.service';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit {

  developers: Developer[] = [
    new Developer('arie', 34, [])
  ];

  @ViewChild("f") developerForm: NgForm;
  id: number;
  editMode = false;
  // concertsForm: FormGroup;
  subscription: Subscription;
  editedItemId: number;
  editedItem: Developer;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameService,
    private developerService: DeveloperService
  ) { }

  ngOnInit() {
    // this.developerService.getDevelopers()
    //   .then((developers) => {
    //     this.developers = developers
    //   }
    //   );
    this.subscription = this.developerService.startedEditing
      .subscribe(
        (id: number) => {

          this.editedItemId = id;

          this.editMode = true;

          this.developerService.getDeveloper(id)
            .then(developers => {
              this.editedItem = developers
              this.developerForm.setValue({
                name: this.editedItem.name,
                age: this.editedItem.age,
                games: this.editedItem.games
              })
            })
            .catch(error => console.log(error));
        });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDeveloper = new Developer(value.name, value.age, value.games);
    if (this.editMode) {
      this.developerService.updateDevelopers(this.editedItemId, newDeveloper);
    } else {
      this.developerService.addDeveloper(newDeveloper);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.developerService.deleteDeveloper(this.editedItemId);
    this.onClear();
  }

  onClear() {
    this.developerForm.reset();
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
