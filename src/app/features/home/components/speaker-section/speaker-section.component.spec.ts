import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSectionComponent } from './speaker-section.component';

describe('LearnBetterWithUsSectionComponent', () => {
  let component: SpeakerSectionComponent;
  let fixture: ComponentFixture<SpeakerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakerSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
