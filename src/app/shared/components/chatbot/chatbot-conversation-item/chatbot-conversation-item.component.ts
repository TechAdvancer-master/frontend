import { Component, Input } from '@angular/core';
import { MarkdownPipe } from '../../../../core/pipes/markdown.pipe';

interface IImageProps {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-chatbot-conversation-item',
  standalone: true,
  imports: [MarkdownPipe],
  templateUrl: './chatbot-conversation-item.component.html',
  styleUrls: ['./chatbot-conversation-item.component.scss'],
})
export class ChatbotConversationItemComponent {
  @Input() img: IImageProps = {
    src: '/avatar.svg',
    alt: 'avatar',
  };
  @Input() query!: string;
  @Input() reverse: boolean = false;
}
