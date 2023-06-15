import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwitzerlandComponent } from './view-switzerland.component';

describe('ViewSwitzerlandComponent', () => {
  let component: ViewSwitzerlandComponent;
  let fixture: ComponentFixture<ViewSwitzerlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSwitzerlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSwitzerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
