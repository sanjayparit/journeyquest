import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticToursDetailComponent } from './domestic-tours-detail.component';

describe('DomesticToursDetailComponent', () => {
  let component: DomesticToursDetailComponent;
  let fixture: ComponentFixture<DomesticToursDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticToursDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticToursDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
