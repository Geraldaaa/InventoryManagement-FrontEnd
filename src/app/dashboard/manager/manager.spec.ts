import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manager } from './manager';

describe('Manager', () => {
  let component: Manager;
  let fixture: ComponentFixture<Manager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Manager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
