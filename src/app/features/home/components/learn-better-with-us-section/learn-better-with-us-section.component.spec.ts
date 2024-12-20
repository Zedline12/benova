import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBetterWithUsSectionComponent } from './learn-better-with-us-section.component';

describe('LearnBetterWithUsSectionComponent', () => {
  let component: LearnBetterWithUsSectionComponent;
  let fixture: ComponentFixture<LearnBetterWithUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnBetterWithUsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnBetterWithUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
