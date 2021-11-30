import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiccaoComponent } from './ficcao.component';

describe('FiccaoComponent', () => {
  let component: FiccaoComponent;
  let fixture: ComponentFixture<FiccaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiccaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
