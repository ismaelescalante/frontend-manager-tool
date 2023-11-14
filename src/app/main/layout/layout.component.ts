import { Component, OnInit, inject } from '@angular/core';
import { LayoutService } from './layout.service';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  private _layoutService = inject(LayoutService);
  private _authService = inject(AuthService);

  private _unsubscribe$ = new Subject<boolean>();
  private _userId?: string;

  ngOnInit(): void {

    this._userId = this._authService.currentUser?.userId

    if (this._userId) {
      this.getProgress()
    }
  }

  getProgress() {
    this._layoutService
      .getProgress(this._userId!)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((m: any) => console.log(m));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
