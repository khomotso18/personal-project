import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDubaiComponent } from './view-dubai.component';

describe('ViewDubaiComponent', () => {
  let component: ViewDubaiComponent;
  let fixture: ComponentFixture<ViewDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDubaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
