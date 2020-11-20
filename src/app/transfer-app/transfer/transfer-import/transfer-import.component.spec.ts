import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferImportComponent } from './transfer-import.component';

describe('TransferImportComponent', () => {
  let component: TransferImportComponent;
  let fixture: ComponentFixture<TransferImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
