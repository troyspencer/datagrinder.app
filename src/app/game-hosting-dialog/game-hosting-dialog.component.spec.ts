import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHostingDialogComponent } from './game-hosting-dialog.component';

describe('GameHostingDialogComponent', () => {
  let component: GameHostingDialogComponent;
  let fixture: ComponentFixture<GameHostingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHostingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHostingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
