import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectanglebtnComponent } from './rectanglebtn.component';

describe('RectanglebtnComponent', () => {
  let component: RectanglebtnComponent;
  let fixture: ComponentFixture<RectanglebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RectanglebtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectanglebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
