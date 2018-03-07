import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadViewComponent } from './read-view.component';

describe('ReadViewComponent', () => {
  let component: ReadViewComponent;
  let fixture: ComponentFixture<ReadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
