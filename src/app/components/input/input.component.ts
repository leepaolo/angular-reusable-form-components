import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() controlName!: string;
  @Input() type: string = '';
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
