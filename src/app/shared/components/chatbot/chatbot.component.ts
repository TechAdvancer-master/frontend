import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { TypingComponent } from './typing/typing.component';
import { ChatbotConversationItemComponent } from './chatbot-conversation-item/chatbot-conversation-item.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    TranslateModule,
  ],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit, OnDestroy {
  isChatOpen = false;
  userQuery = '';
  conversation: IConversation[] = [];
  loading = false;
  error: string | null = null;
  private destroy$ = new Subject<void>();
  queryForm: FormGroup;

  @ViewChild('conversationWindow') conversationWindow!: ElementRef;

  constructor(private http: HttpClient, private fb: FormBuilder, private translate: TranslateService) {
    this.queryForm = this.fb.group({
      userQuery: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadWelcomeMessage();

    // Listen for language changes
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadWelcomeMessage();
    });
  }

  private loadWelcomeMessage(): void {
    this.translate.get('CHATBOT.WELCOME_MESSAGE').subscribe((message) => {
      this.conversation = this.conversation.filter((item) => item.agent !== 'ai' || item.message !== this.getPreviousWelcomeMessage());
      this.conversation.unshift({ agent: 'ai', message });
    });
  }

  private getPreviousWelcomeMessage(): string {
    const welcomeMessage = this.conversation.find((item) => item.agent === 'ai')?.message || '';
    return welcomeMessage;
  }

  handleToggleWindow(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  handleSubmit(): void {
    this.translate.get('CHATBOT.MESSAGE_TOO_LONG').subscribe((messageTooLong) => {
      if (this.userQuery.length > 500) {
        this.error = messageTooLong;
        return;
      }
      if (this.userQuery) {
        this.conversation.push({ agent: 'user', message: this.userQuery });
        this.userQuery = '';
        this.loading = true;
        this.error = null;
        this.fetchResponse();
      }
    });
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
