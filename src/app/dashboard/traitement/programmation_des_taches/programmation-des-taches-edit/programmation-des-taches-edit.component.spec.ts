import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationDesTachesEditComponent } from './programmation-des-taches-edit.component';

describe('ProgrammationDesTachesEditComponent', () => {
  let component: ProgrammationDesTachesEditComponent;
  let fixture: ComponentFixture<ProgrammationDesTachesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammationDesTachesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammationDesTachesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
