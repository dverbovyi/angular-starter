import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPolyButtonComponent } from './custom-poly-button.component';

describe('CustomPolyButtonComponent', () => {
  let component: CustomPolyButtonComponent;
  let fixture: ComponentFixture<CustomPolyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPolyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPolyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
