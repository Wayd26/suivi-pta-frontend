import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesAddComponent } from './taches-add.component';

describe('TachesAddComponent', () => {
  let component: TachesAddComponent;
  let fixture: ComponentFixture<TachesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
