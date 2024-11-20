import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { TypingComponent } from './typing/typing.component';
import { ChatbotConversationItemComponent } from './chatbot-conversation-item/chatbot-conversation-item.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface IConversation {
  agent: 'user' | 'ai';
  message: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TypingComponent,
    ChatbotConversationItemComponent,
    MatIcon,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  isChatOpen = false;
  userQuery = '';
  conversation: IConversation[] = [
    {
      agent: 'ai',
      message:
        'Hola, soy el asistente de TechAdvancer, mi nombre es Techi. \n\n ¿En qué te puedo ayudar hoy?',
    },
  ];
  loading = false;
  error: string | null = null;
  queryForm: FormGroup;
  @ViewChild('conversationWindow') conversationWindow!: ElementRef;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.queryForm = this.fb.group({
      userQuery: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Initialization code if needed
  }

  handleToggleWindow(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  handleSubmit(): void {
    if (this.userQuery.length > 500) {
      this.error = 'Tu mensaje es muy largo, favor de acortarlo.';
      return;
    }
    if (this.userQuery) {
      this.conversation.push({ agent: 'user', message: this.userQuery });
      this.userQuery = '';
      this.loading = true;
      this.error = null;
      this.fetchResponse();
    }
  }

  fetchResponse(): void {
    this.http.post<string>('https://chatbotapi.online/chatbot/', this.conversation).subscribe(
      (response) => {
        this.conversation.push({ agent: 'ai', message: response });
        this.scrollToBottom();
      },
      (err) => {
        this.error = err.message;
      },
      () => {
        this.loading = false;
      }
    );
  }

  handleInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.userQuery = target.value;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  scrollToBottom(): void {
    setTimeout(() => {
      if (this.conversationWindow) {
        this.conversationWindow.nativeElement.scrollTop =
          this.conversationWindow.nativeElement.scrollHeight;
      }
    }, 0);
  }
}
