import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditcardComponent } from './list-creditcard.component';

describe('ListCreditcardComponent', () => {
  let component: ListCreditcardComponent;
  let fixture: ComponentFixture<ListCreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
