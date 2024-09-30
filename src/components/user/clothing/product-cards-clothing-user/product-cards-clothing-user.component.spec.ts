import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsClothingUserComponent } from './product-cards-clothing-user.component';

describe('ProductCardsClothingUserComponent', () => {
  let component: ProductCardsClothingUserComponent;
  let fixture: ComponentFixture<ProductCardsClothingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardsClothingUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardsClothingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
