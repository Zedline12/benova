import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsComponent } from './why-us-section.component';

describe('WorkspacesComponent', () => {
  let component: WhyUsComponent;
  let fixture: ComponentFixture<WhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyUsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
