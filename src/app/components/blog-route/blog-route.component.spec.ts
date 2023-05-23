import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRouteComponent } from './blog-route.component';

describe('BlogRouteComponent', () => {
  let component: BlogRouteComponent;
  let fixture: ComponentFixture<BlogRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogRouteComponent]
    });
    fixture = TestBed.createComponent(BlogRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
