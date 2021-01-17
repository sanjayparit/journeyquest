import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaServiceComponent } from './visa-service.component';

describe('VisaServiceComponent', () => {
  let component: VisaServiceComponent;
  let fixture: ComponentFixture<VisaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
