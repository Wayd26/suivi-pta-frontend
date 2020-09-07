import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceLoaderComponent } from './exercice-loader.component';

describe('ExerciceLoaderComponent', () => {
  let component: ExerciceLoaderComponent;
  let fixture: ComponentFixture<ExerciceLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
