import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild("f") userForm: NgForm;
  id: number;
  editMode = false;
  // concertsForm: FormGroup;
  subscription: Subscription;
  editedItemId: number;
  editedItem: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.subscription = this.registerService.startedEditing
      .subscribe(
        (id: number) => {

          this.editedItemId = id;

          this.editMode = true;

        });
  }

  onSignup(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.username, value.password, value.firstname, value.lastname);
    this.registerService.addUser(newUser);
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.userForm.reset();
    this.editMode = false;
  }
}
