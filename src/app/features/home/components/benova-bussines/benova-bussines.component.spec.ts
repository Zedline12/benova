import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenovaBussinesComponent } from './benova-bussines.component';

describe('BenovaBussinesComponent', () => {
  let component: BenovaBussinesComponent;
  let fixture: ComponentFixture<BenovaBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenovaBussinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenovaBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
