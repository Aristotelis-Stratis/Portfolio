import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioComponent } from './my-portfolio.component';

describe('MyPortfolioComponent', () => {
  let component: MyPortfolioComponent;
  let fixture: ComponentFixture<MyPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
