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
  removeIsDisabled: boolean = false
  addIsDisabled : boolean = false
  num: number = 1
  info: Info[] = INFO
  isActive: string = ""
  addCard(){
  this.num += 1
    this.removeIsDisabled = false
    if(this.num === 10){
      this.addIsDisabled = true
    }
  }
  removeCard(){
    this.num -= 1
    this.addIsDisabled = false
    if(this.num === 0){
      this.removeIsDisabled = true
    }
  }

}
