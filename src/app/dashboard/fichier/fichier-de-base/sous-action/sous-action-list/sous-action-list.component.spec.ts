import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousActionListComponent } from './sous-action-list.component';

describe('SousActionListComponent', () => {
  let component: SousActionListComponent;
  let fixture: ComponentFixture<SousActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
