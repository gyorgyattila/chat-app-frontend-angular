import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomDialogComponent } from './chatroom-dialog.component';

describe('ChatroomDialogComponent', () => {
  let component: ChatroomDialogComponent;
  let fixture: ComponentFixture<ChatroomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
