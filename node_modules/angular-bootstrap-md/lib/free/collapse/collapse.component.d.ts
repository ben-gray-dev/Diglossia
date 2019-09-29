import { OnInit, EventEmitter, QueryList } from '@angular/core';
import { FixedButtonCaptionDirective } from '../buttons/fixed-caption.directive';
export declare class CollapseComponent implements OnInit {
    captions: QueryList<FixedButtonCaptionDirective>;
    isCollapsed: boolean;
    showBsCollapse: EventEmitter<any>;
    shownBsCollapse: EventEmitter<any>;
    hideBsCollapse: EventEmitter<any>;
    hiddenBsCollapse: EventEmitter<any>;
    collapsed: EventEmitter<any>;
    expanded: EventEmitter<any>;
    constructor();
    expandAnimationState: string;
    overflow: string;
    onExpandBodyDone(event: any): void;
    showCaptions(): void;
    toggle(): void;
    show(): void;
    hide(): void;
    initializeCollapseState(): void;
    ngOnInit(): void;
}
