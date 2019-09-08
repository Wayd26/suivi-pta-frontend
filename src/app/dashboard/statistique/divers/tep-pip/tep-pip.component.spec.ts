import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepPipComponent } from './tep-pip.component';

describe('TepPipComponent', () => {
  let component: TepPipComponent;
  let fixture: ComponentFixture<TepPipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepPipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
