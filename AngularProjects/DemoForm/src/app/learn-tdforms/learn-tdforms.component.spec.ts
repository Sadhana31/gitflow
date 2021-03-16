import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTdformsComponent } from './learn-tdforms.component';

describe('LearnTdformsComponent', () => {
  let component: LearnTdformsComponent;
  let fixture: ComponentFixture<LearnTdformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnTdformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTdformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
