import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFormWrapperComponent } from './use-form-wrapper.component';

describe('UseFormWrapperComponent', () => {
  let component: UseFormWrapperComponent;
  let fixture: ComponentFixture<UseFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
