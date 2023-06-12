import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAustraliaComponent } from './view-australia.component';

describe('ViewAustraliaComponent', () => {
  let component: ViewAustraliaComponent;
  let fixture: ComponentFixture<ViewAustraliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAustraliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
