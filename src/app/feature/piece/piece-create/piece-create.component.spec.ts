import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceCreateComponent } from './piece-create.component';

describe('PieceCreateComponent', () => {
  let component: PieceCreateComponent;
  let fixture: ComponentFixture<PieceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
