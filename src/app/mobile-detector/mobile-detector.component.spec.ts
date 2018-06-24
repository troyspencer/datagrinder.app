import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDetectorComponent } from './mobile-detector.component';

describe('MobileDetectorComponent', () => {
  let component: MobileDetectorComponent;
  let fixture: ComponentFixture<MobileDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
