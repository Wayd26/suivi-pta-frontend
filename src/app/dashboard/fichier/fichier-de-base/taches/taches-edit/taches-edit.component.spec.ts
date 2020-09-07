import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesEditComponent } from './taches-edit.component';

describe('TachesEditComponent', () => {
  let component: TachesEditComponent;
  let fixture: ComponentFixture<TachesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
