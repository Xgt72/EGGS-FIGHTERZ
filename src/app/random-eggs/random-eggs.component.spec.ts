import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomEggsComponent } from './random-eggs.component';

describe('RandomEggsComponent', () => {
  let component: RandomEggsComponent;
  let fixture: ComponentFixture<RandomEggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomEggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomEggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
