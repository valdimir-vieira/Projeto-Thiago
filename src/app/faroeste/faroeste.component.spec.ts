import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaroesteComponent } from './faroeste.component';

describe('FaroesteComponent', () => {
  let component: FaroesteComponent;
  let fixture: ComponentFixture<FaroesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaroesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaroesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
