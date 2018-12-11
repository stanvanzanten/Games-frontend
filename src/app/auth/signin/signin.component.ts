import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login.model';

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
    const value = form.value;
    const login = new Login(value.username, value.password)
    this.loginService.loginUser(login).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
