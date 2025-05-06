import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelleFormComponent } from './parcelle-form.component';

describe('ParcelleFormComponent', () => {
  let component: ParcelleFormComponent;
  let fixture: ComponentFixture<ParcelleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelleFormComponent]
    });
    fixture = TestBed.createComponent(ParcelleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
