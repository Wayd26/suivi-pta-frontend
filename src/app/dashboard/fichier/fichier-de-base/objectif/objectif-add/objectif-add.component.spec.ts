import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifAddComponent } from './objectif-add.component';

describe('ObjectifAddComponent', () => {
  let component: ObjectifAddComponent;
  let fixture: ComponentFixture<ObjectifAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
