import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHostingComponent } from './game-hosting.component';

describe('GameHostingComponent', () => {
  let component: GameHostingComponent;
  let fixture: ComponentFixture<GameHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
