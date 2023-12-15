import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'country-select',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent {
  @Input() countries: string[] = [];
  @Output() selectedCountry: EventEmitter<string> = new EventEmitter<string>();

  onClick(country: string) {
    this.selectedCountry.emit(country);
  }
}
