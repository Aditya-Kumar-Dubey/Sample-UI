import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercePagesComponent } from './ecommerce-pages.component';

describe('EcommercePagesComponent', () => {
  let component: EcommercePagesComponent;
  let fixture: ComponentFixture<EcommercePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommercePagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommercePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
