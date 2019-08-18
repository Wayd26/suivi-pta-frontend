import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifSpecifiqueListComponent } from './objectif-specifique-list.component';

describe('ObjectifSpecifiqueListComponent', () => {
  let component: ObjectifSpecifiqueListComponent;
  let fixture: ComponentFixture<ObjectifSpecifiqueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifSpecifiqueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifSpecifiqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
