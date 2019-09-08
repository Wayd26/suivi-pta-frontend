import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepActionComponent } from './tep-action.component';

describe('TepActionComponent', () => {
  let component: TepActionComponent;
  let fixture: ComponentFixture<TepActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
