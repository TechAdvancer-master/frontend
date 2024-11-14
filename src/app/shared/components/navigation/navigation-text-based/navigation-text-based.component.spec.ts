import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTextBasedComponent } from './navigation-text-based.component';

describe('NavigationTextBasedComponent', () => {
  let component: NavigationTextBasedComponent;
  let fixture: ComponentFixture<NavigationTextBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationTextBasedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationTextBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
