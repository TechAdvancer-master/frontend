import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'markdown',
    standalone: true,
})
export class MarkdownPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(value: string): SafeHtml {
        const markdown = value || '';
        if (!this.containsMarkdown(markdown)) {
            return markdown;
        }
        const html = marked.parse(markdown) as string;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    private containsMarkdown(text: string): boolean {
        return /[*_`#]/.test(text);
    }
}
