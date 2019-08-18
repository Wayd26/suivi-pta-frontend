import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifLoaderComponent } from './objectif-loader.component';

describe('ObjectifLoaderComponent', () => {
  let component: ObjectifLoaderComponent;
  let fixture: ComponentFixture<ObjectifLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
