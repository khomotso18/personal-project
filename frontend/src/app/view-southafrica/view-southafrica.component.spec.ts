import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSouthafricaComponent } from './view-southafrica.component';

describe('ViewSouthafricaComponent', () => {
  let component: ViewSouthafricaComponent;
  let fixture: ComponentFixture<ViewSouthafricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSouthafricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSouthafricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
