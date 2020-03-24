import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagesLayoutComponent } from './chat-messages-layout.component';

describe('ChatMessagesLayoutComponent', () => {
  let component: ChatMessagesLayoutComponent;
  let fixture: ComponentFixture<ChatMessagesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessagesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
