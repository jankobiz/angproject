import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';


@Directive({ 
    selector: '[myHighlight]' 
})

export class HighlightDirective {

    private _defaultColor = 'red';

    @Input ('myHighlight') highlightColor: string;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    @HostListener ('mouseenter') onMouseEnter () {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener ('mouseleave') onMouseLeave () {
        this.highlight(null);
    }

    private highlight (color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}