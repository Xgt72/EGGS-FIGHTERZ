import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSexeComponent } from './button-sexe.component';

describe('ButtonSexeComponent', () => {
  let component: ButtonSexeComponent;
  let fixture: ComponentFixture<ButtonSexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
