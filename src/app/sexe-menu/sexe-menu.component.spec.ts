import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexeMenuComponent } from './sexe-menu.component';

describe('SexeMenuComponent', () => {
  let component: SexeMenuComponent;
  let fixture: ComponentFixture<SexeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
