import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar-used',
  templateUrl: './search-bar-used.component.html',
  styleUrls: ['./search-bar-used.component.scss'],
})
export class SearchBarUsedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  enteredSerchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSerchValue);
  }
}
