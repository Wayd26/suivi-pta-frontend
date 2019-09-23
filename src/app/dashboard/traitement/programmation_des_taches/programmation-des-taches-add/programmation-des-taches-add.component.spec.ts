import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationDesTachesAddComponent } from './programmation-des-taches-add.component';

describe('ProgrammationDesTachesAddComponent', () => {
  let component: ProgrammationDesTachesAddComponent;
  let fixture: ComponentFixture<ProgrammationDesTachesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammationDesTachesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammationDesTachesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
