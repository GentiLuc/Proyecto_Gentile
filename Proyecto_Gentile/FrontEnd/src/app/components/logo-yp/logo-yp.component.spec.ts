import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYPComponent } from './logo-yp.component';

describe('LogoYPComponent', () => {
  let component: LogoYPComponent;
  let fixture: ComponentFixture<LogoYPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoYPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoYPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
