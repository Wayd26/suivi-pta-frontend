import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatAddComponent } from './resultat-add.component';

describe('ResultatAddComponent', () => {
  let component: ResultatAddComponent;
  let fixture: ComponentFixture<ResultatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
