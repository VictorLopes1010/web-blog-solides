import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-home',
  templateUrl: './buttons-home.component.html',
  styleUrl: './buttons-home.component.css'
})
export class ButtonsHomeComponent {

  @Output() selectedRoutine: EventEmitter<string> = new EventEmitter();

  selectedTab: string | null = null;

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.selectedRoutine.emit(tab);
  }

}
