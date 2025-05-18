import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDesignComponent } from './atomic-design.component';

describe('AtomicDesignComponent', () => {
  let component: AtomicDesignComponent;
  let fixture: ComponentFixture<AtomicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
