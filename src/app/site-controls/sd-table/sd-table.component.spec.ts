import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdTableComponent } from './sd-table.component';

describe('SdTableComponent', () => {
  let component: SdTableComponent;
  let fixture: ComponentFixture<SdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
