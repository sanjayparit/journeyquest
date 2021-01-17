import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFeatureComponent } from './hotel-feature.component';

describe('HotelFeatureComponent', () => {
  let component: HotelFeatureComponent;
  let fixture: ComponentFixture<HotelFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
