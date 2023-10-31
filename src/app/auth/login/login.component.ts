import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private _fb = inject(FormBuilder)
  private _loginService = inject(LoginService)
  private _router = inject(Router)
  
  public loginForm: FormGroup = this._fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required]],
});

  onSubmit(){
    this._loginService.login(this.loginForm.value).subscribe(() => this._router.navigate(['/']))
  }
}
