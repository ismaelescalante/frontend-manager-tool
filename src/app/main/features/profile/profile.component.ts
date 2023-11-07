import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../../shared/services/form.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
  public name?: string;
  public lastName?: string;
  public email?: string;
  public github?: string;
  public html?: string;
  public javascript?: string;
  public userLinksForm?: FormGroup;

  constructor(
    private _fb: FormService,
    private _auth: AuthService
  ) { }
  ngOnInit(): void {
    this.getUser()
    this.getProfileForm()
  }

  getUser() {
    this.name = this._auth.currentUser?.name
    this.lastName = this._auth.currentUser?.lastName
    this.email = this._auth.currentUser?.email
  }

  getProfileForm() {
    this._fb.createProfileForm();
    this.userLinksForm?.patchValue({
      github: this.github,
      html: this.html,
      javascript: this.javascript
    })
  }
}
