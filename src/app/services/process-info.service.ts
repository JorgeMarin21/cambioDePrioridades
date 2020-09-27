import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessInfoService {
  process: any;
  processChanged: any;
  numberOne: number;
  numberTwo: number;
  showProcesses = false;
  constructor() { }

  getShowProcesses() {
    return this.showProcesses;
  }
  setShowProcesses(val) {
    this.showProcesses = val;
  }
  addProcess(proc) {
    this.process = proc;
  }
  getProcess() {
    return this.process;
  }
  getProccessChanged() {
    const body = {processChanged: this.processChanged, num1: this.numberOne, num2: this.numberTwo};
    return body;
  }
  isFilled() {
    return this.process !== undefined;
  }
  changeListOrder() {
    let randomNum1 = 0;
    let randomNum2 = 0;
    console.log('array #1', this.process.processList);
    const listBackUp = [];
    do {
      randomNum1 = Math.floor(Math.random() * this.process.processList.length);
      randomNum2 = Math.floor(Math.random() * this.process.processList.length);
    } while (randomNum1 <= randomNum2);
    for (let index = 0; index < this.process.processList.length; index++) {
      if ( index < randomNum2 || index > randomNum1) {
        listBackUp.push(this.process.processList[index]);
      } else if (index === randomNum2) {
        listBackUp.push(this.process.processList[randomNum1]);
      } else {
        listBackUp.push(this.process.processList[index - 1]);
      }
    }
    console.log('array #2', listBackUp);
    this.processChanged = listBackUp;
    this.numberOne = randomNum1;
    this.numberTwo = randomNum2;
    return {listBackUp, randomNum1, randomNum2};
  }
}
