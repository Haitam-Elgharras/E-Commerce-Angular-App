import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  // 1- create an event emitter
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // 2- emit the event
  onSearchTextChange(searchInput: HTMLInputElement) {
    this.searchTextChanged.emit(searchInput.value);
    this.searchText = searchInput.value;
  }
}
