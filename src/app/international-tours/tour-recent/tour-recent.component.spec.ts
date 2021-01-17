import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourRecentComponent } from './tour-recent.component';

describe('TourRecentComponent', () => {
  let component: TourRecentComponent;
  let fixture: ComponentFixture<TourRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
