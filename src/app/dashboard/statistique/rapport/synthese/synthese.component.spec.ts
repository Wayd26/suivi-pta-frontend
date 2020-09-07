import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseComponent } from './synthese.component';

describe('SyntheseComponent', () => {
  let component: SyntheseComponent;
  let fixture: ComponentFixture<SyntheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
