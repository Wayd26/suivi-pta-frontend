import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousActionEditComponent } from './sous-action-edit.component';

describe('SousActionEditComponent', () => {
  let component: SousActionEditComponent;
  let fixture: ComponentFixture<SousActionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousActionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousActionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
