import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCkoutComponent } from './credit-card-ckout.component';

describe('CreditCardCkoutComponent', () => {
  let component: CreditCardCkoutComponent;
  let fixture: ComponentFixture<CreditCardCkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardCkoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditCardCkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
