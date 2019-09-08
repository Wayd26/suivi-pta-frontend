import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationDesTachesLoaderComponent } from './programmation-des-taches-loader.component';

describe('ProgrammationDesTachesLoaderComponent', () => {
  let component: ProgrammationDesTachesLoaderComponent;
  let fixture: ComponentFixture<ProgrammationDesTachesLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammationDesTachesLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammationDesTachesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
