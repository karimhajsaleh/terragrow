import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelleListComponent } from './parcelle-list.component';

describe('ParcelleListComponent', () => {
  let component: ParcelleListComponent;
  let fixture: ComponentFixture<ParcelleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelleListComponent]
    });
    fixture = TestBed.createComponent(ParcelleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
