import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFinancementListComponent } from './source-financement-list.component';

describe('SourceFinancementListComponent', () => {
  let component: SourceFinancementListComponent;
  let fixture: ComponentFixture<SourceFinancementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFinancementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFinancementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
