import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RValueComponent } from './r-value.component';

describe('RValueComponent', () => {
  let component: RValueComponent;
  let fixture: ComponentFixture<RValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
