import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticToursRecentComponent } from './domestic-tours-recent.component';

describe('DomesticToursRecentComponent', () => {
  let component: DomesticToursRecentComponent;
  let fixture: ComponentFixture<DomesticToursRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticToursRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticToursRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
