import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormService } from 'src/app/shared/services/form.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/models/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm?: FormGroup;

  private _authService = inject(AuthService);
  private _fb = inject(FormService);
  private _router = inject(Router);
  private _unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.loginForm = this._fb.createLoginForm()
  }

  getLoginForm() {
    this.loginForm = this._fb.createLoginForm();
  }

  onSubmit() {
    const user: User = {
      email: this.loginForm!.get('email')?.value,
      password : this.loginForm!.get('password')?.value,
    };

    this._authService
      .login(user)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(() => this._router.navigate(['/']));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true), this._unsubscribe$.complete();
  }
}
