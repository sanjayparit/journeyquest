import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticToursListComponent } from './domestic-tours-list.component';

describe('DomesticToursListComponent', () => {
  let component: DomesticToursListComponent;
  let fixture: ComponentFixture<DomesticToursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticToursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticToursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
