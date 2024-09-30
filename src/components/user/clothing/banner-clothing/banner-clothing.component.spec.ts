import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerClothingComponent } from './banner-clothing.component';

describe('BannerClothingComponent', () => {
  let component: BannerClothingComponent;
  let fixture: ComponentFixture<BannerClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerClothingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
