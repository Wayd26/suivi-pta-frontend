import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousActionAddComponent } from './sous-action-add.component';

describe('SousActionAddComponent', () => {
  let component: SousActionAddComponent;
  let fixture: ComponentFixture<SousActionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousActionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousActionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
