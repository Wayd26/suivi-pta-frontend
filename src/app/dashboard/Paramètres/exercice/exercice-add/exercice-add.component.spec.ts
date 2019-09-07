import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceAddComponent } from './exercice-add.component';

describe('ExerciceAddComponent', () => {
  let component: ExerciceAddComponent;
  let fixture: ComponentFixture<ExerciceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
