import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  selectedFilter: string = 'all';

  // when we create an event emitter and decorate it with @Output() decorator the parent component can listen to the event
  @Output()
  selectedFilterChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterChange() {
    this.selectedFilterChange.emit(this.selectedFilter);
  }
}
