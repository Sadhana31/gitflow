import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnReactiveformsComponent } from './learn-reactiveforms.component';

describe('LearnReactiveformsComponent', () => {
  let component: LearnReactiveformsComponent;
  let fixture: ComponentFixture<LearnReactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnReactiveformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnReactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
