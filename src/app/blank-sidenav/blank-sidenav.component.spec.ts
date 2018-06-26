import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankSidenavComponent } from './blank-sidenav.component';

describe('BlankSidenavComponent', () => {
  let component: BlankSidenavComponent;
  let fixture: ComponentFixture<BlankSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
