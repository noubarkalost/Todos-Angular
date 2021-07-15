import {Component} from '@angular/core';

// CONSTANTS
import {INFO} from '../constants'

// TYPES
import {Info} from "../constants/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: Info[] = INFO
  isActive: string = ""
  modalTitle: string = ''
  modalDescription = ""

  bodyElement = document.getElementsByName("body")

  onModalOpen(title: string, description: string) {
    this.isActive = 'is-active'
    this.modalTitle = title;
    this.modalDescription = description;
    // this.bodyElement.style = {overflow: "hidden"}
  }

  onCloseModal() {
    this.isActive = ""
  }
}
