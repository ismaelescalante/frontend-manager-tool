import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExercisesComponent } from './angular-exercises.component';

describe('AngularExercisesComponent', () => {
  let component: AngularExercisesComponent;
  let fixture: ComponentFixture<AngularExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularExercisesComponent]
    });
    fixture = TestBed.createComponent(AngularExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
