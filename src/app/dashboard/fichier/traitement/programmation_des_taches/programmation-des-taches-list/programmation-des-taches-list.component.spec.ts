import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationDesTachesListComponent } from './programmation-des-taches-list.component';

describe('ProgrammationDesTachesListComponent', () => {
  let component: ProgrammationDesTachesListComponent;
  let fixture: ComponentFixture<ProgrammationDesTachesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammationDesTachesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammationDesTachesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
