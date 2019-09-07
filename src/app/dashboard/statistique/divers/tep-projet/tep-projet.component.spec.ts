import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepProjetComponent } from './tep-projet.component';

describe('TepProjetComponent', () => {
  let component: TepProjetComponent;
  let fixture: ComponentFixture<TepProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
