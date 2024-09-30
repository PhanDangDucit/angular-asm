import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClothingUserComponent } from './product-clothing-user.component';

describe('ProductClothingUserComponent', () => {
  let component: ProductClothingUserComponent;
  let fixture: ComponentFixture<ProductClothingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductClothingUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductClothingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
