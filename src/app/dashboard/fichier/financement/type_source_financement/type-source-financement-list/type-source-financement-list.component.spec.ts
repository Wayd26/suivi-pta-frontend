import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSourceFinancementListComponent } from './type-source-financement-list.component';

describe('TypeSourceFinancementListComponent', () => {
  let component: TypeSourceFinancementListComponent;
  let fixture: ComponentFixture<TypeSourceFinancementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSourceFinancementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSourceFinancementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
