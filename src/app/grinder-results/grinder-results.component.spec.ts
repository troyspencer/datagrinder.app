import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrinderResultsComponent } from './grinder-results.component';

describe('GrinderResultsComponent', () => {
  let component: GrinderResultsComponent;
  let fixture: ComponentFixture<GrinderResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrinderResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrinderResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
