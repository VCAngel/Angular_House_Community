import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsEntryComponent } from './about-us-entry.component';

describe('AboutUsEntryComponent', () => {
  let component: AboutUsEntryComponent;
  let fixture: ComponentFixture<AboutUsEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsEntryComponent]
    });
    fixture = TestBed.createComponent(AboutUsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
