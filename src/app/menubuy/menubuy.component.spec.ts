import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubuyComponent } from './menubuy.component';

describe('MenubuyComponent', () => {
  let component: MenubuyComponent;
  let fixture: ComponentFixture<MenubuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
