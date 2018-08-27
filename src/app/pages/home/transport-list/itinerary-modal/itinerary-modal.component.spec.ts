import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryModalComponent } from './itinerary-modal.component';

describe('ItineraryModalComponent', () => {
  let component: ItineraryModalComponent;
  let fixture: ComponentFixture<ItineraryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
