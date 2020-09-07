import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereEditComponent } from './ministere-edit.component';

describe('MinistereEditComponent', () => {
  let component: MinistereEditComponent;
  let fixture: ComponentFixture<MinistereEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistereEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
