import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentarioComponent } from './documentario.component';

describe('DocumentarioComponent', () => {
  let component: DocumentarioComponent;
  let fixture: ComponentFixture<DocumentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
