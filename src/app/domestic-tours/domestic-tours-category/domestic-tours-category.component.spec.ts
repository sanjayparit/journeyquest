import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticToursCategoryComponent } from './domestic-tours-category.component';

describe('DomesticToursCategoryComponent', () => {
  let component: DomesticToursCategoryComponent;
  let fixture: ComponentFixture<DomesticToursCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticToursCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticToursCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
