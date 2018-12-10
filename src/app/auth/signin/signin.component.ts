import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class LoginComponent implements OnInit {

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
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.subscription = this.loginService.startedEditing
      .subscribe(
        (id: number) => {

          this.editedItemId = id;

          this.editMode = true;

        });
  }

  onLogin(form: NgForm) {
    this.loginService.loginUser(this.editedItem);
  }
}
