import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent implements OnInit, OnDestroy {
  @Input() controlName!: string;
  @Input() placeholder: string = '';
  @Input() control!: FormControl;
  @Input() label$!: Observable<string>;

  displayLabel: string = '';

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.label$.pipe(takeUntil(this.destroy$)).subscribe((label) => {
      this.displayLabel = label;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
