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
  resetIsDisabled: boolean = true
  removeIsDisabled: boolean = true
  addIsDisabled : boolean = false
  originalNum: number = 1
  num: number = this.originalNum
  info: Info[] = INFO
  isActive: string = ""
  addCard(){
  this.num += 1
    this.removeIsDisabled = false
    this.resetIsDisabled = false
    if(this.num === 10){
      this.addIsDisabled = true
    }
  }
  removeCard(){
    this.num -= 1
    this.addIsDisabled = false
    if(this.num === this.originalNum){
      this.resetIsDisabled = true
      this.removeIsDisabled = true
    }
  }

  resetCards(){
    this.num = this.originalNum
    if(this.num === this.originalNum){
      this.removeIsDisabled = true
      this.addIsDisabled = true

    }
    this.addIsDisabled = false
  }
}
