import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumini } from './alumini';

describe('Alumini', () => {
  let component: Alumini;
  let fixture: ComponentFixture<Alumini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alumini],
    }).compileComponents();

    fixture = TestBed.createComponent(Alumini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
