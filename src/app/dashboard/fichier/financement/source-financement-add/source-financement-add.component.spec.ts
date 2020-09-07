import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFinancementAddComponent } from './source-financement-add.component';

describe('SourceFinancementAddComponent', () => {
  let component: SourceFinancementAddComponent;
  let fixture: ComponentFixture<SourceFinancementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFinancementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFinancementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
