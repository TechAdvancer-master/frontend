import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
    name: 'markdown',
    standalone: true
})
export class MarkdownPipe implements PipeTransform {
    transform(value: string): string {
        const markdown = value || '';
        return marked.parse(markdown) as string;
    }
}
