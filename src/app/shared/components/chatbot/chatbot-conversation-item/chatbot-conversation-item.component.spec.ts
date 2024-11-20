import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotConversationItemComponent } from './chatbot-conversation-item.component';

describe('ChatbotConversationItemComponent', () => {
  let component: ChatbotConversationItemComponent;
  let fixture: ComponentFixture<ChatbotConversationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotConversationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotConversationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
