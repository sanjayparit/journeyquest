import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursFeatureComponent } from './tours-feature.component';

describe('ToursFeatureComponent', () => {
  let component: ToursFeatureComponent;
  let fixture: ComponentFixture<ToursFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
