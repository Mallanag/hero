import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsappComponent } from './newsapp.component';

describe('NewsappComponent', () => {
  let component: NewsappComponent;
  let fixture: ComponentFixture<NewsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
