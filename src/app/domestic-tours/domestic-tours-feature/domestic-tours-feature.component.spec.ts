import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticToursFeatureComponent } from './domestic-tours-feature.component';

describe('DomesticToursFeatureComponent', () => {
  let component: DomesticToursFeatureComponent;
  let fixture: ComponentFixture<DomesticToursFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticToursFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticToursFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
