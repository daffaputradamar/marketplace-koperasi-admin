import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsahaComponent } from './usaha.component';

describe('UsahaComponent', () => {
  let component: UsahaComponent;
  let fixture: ComponentFixture<UsahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
