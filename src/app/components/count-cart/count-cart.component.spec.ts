import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCartComponent } from './count-cart.component';

describe('CountCartComponent', () => {
  let component: CountCartComponent;
  let fixture: ComponentFixture<CountCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
