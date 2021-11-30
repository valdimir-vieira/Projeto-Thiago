import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenhoComponent } from './desenho.component';

describe('DesenhoComponent', () => {
  let component: DesenhoComponent;
  let fixture: ComponentFixture<DesenhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
