import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCoded } from './hard-coded';

describe('HardCoded', () => {
  let component: HardCoded;
  let fixture: ComponentFixture<HardCoded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardCoded],
    }).compileComponents();

    fixture = TestBed.createComponent(HardCoded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

