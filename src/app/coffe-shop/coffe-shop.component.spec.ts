import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeShopComponent } from './coffe-shop.component';

describe('CoffeShopComponent', () => {
  let component: CoffeShopComponent;
  let fixture: ComponentFixture<CoffeShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
