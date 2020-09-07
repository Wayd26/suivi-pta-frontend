import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEditComponent } from './activite-edit.component';

describe('ActiviteEditComponent', () => {
  let component: ActiviteEditComponent;
  let fixture: ComponentFixture<ActiviteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
