import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRouteComponent } from './contact-route.component';

describe('ContactRouteComponent', () => {
  let component: ContactRouteComponent;
  let fixture: ComponentFixture<ContactRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactRouteComponent]
    });
    fixture = TestBed.createComponent(ContactRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
