import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereListComponent } from './ministere-list.component';

describe('MinistereListComponent', () => {
  let component: MinistereListComponent;
  let fixture: ComponentFixture<MinistereListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistereListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
