import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnInit, OnDestroy {
  delays = ['0.0s', '0.2s', '0.4s'];
  typingText = ''; // Dynamically set from translations
  private destroy$ = new Subject<void>();

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadTypingText();

    // Listen for language changes
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadTypingText();
    });
  }

  private loadTypingText(): void {
    this.translate.get('TYPING.TEXT').subscribe((text) => {
      this.typingText = text;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
