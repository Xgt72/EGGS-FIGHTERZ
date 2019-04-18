import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGenreComponent } from './button-genre.component';

describe('ButtonGenreComponent', () => {
  let component: ButtonGenreComponent;
  let fixture: ComponentFixture<ButtonGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
