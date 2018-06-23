import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawFormSheetComponent } from './draw-form-sheet.component';

describe('DrawFormSheetComponent', () => {
  let component: DrawFormSheetComponent;
  let fixture: ComponentFixture<DrawFormSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawFormSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawFormSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
