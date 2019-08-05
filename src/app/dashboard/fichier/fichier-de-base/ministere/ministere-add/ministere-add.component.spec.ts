import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereAddComponent } from './ministere-add.component';

describe('MinistereAddComponent', () => {
  let component: MinistereAddComponent;
  let fixture: ComponentFixture<MinistereAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistereAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistereAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
