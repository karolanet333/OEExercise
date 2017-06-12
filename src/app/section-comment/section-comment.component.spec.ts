import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCommentComponent } from './section-comment.component';

describe('SectionCommentComponent', () => {
  let component: SectionCommentComponent;
  let fixture: ComponentFixture<SectionCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
