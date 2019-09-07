import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceEditComponent } from './exercice-edit.component';

describe('ExerciceEditComponent', () => {
  let component: ExerciceEditComponent;
  let fixture: ComponentFixture<ExerciceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
