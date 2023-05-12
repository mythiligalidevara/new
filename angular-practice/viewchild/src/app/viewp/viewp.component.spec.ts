import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpComponent } from './viewp.component';

describe('ViewpComponent', () => {
  let component: ViewpComponent;
  let fixture: ComponentFixture<ViewpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpComponent]
    });
    fixture = TestBed.createComponent(ViewpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
