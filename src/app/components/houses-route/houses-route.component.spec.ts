import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesRouteComponent } from './houses-route.component';

describe('HousesRouteComponent', () => {
  let component: HousesRouteComponent;
  let fixture: ComponentFixture<HousesRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousesRouteComponent]
    });
    fixture = TestBed.createComponent(HousesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
