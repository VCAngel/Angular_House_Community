import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRouteComponent } from './landing-route.component';

describe('LandingRouteComponent', () => {
  let component: LandingRouteComponent;
  let fixture: ComponentFixture<LandingRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingRouteComponent]
    });
    fixture = TestBed.createComponent(LandingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
