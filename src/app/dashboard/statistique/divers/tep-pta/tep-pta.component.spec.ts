import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepPtaComponent } from './tep-pta.component';

describe('TepPtaComponent', () => {
  let component: TepPtaComponent;
  let fixture: ComponentFixture<TepPtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepPtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepPtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
