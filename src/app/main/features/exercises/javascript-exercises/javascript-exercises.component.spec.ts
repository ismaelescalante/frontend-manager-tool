import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptExercisesComponent } from './javascript-exercises.component';

describe('JavascriptExercisesComponent', () => {
  let component: JavascriptExercisesComponent;
  let fixture: ComponentFixture<JavascriptExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptExercisesComponent]
    });
    fixture = TestBed.createComponent(JavascriptExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
