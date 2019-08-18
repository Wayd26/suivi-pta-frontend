import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementLoaderComponent } from './departement-loader.component';

describe('DepartementLoaderComponent', () => {
  let component: DepartementLoaderComponent;
  let fixture: ComponentFixture<DepartementLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
