import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneeComponent } from './donnee.component';

describe('DonneeComponent', () => {
  let component: DonneeComponent;
  let fixture: ComponentFixture<DonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
