import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessInfoService {
  process: any;
  processChanged: any;
  processRecurrent = [];
  lastValueList = [];
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
    if (this.processRecurrent.length !== 0) {
      this.processRecurrent = [];
    }
  }
  getProcess() {
    return this.process;
  }
  getRecurrentProcess() {
    return this.processRecurrent;
  }
  getProccessChanged() {
    const body = {processChanged: this.processChanged, num1: this.numberOne, num2: this.numberTwo};
    return body;
  }
  getLastValueList() {
    return this.lastValueList;
  }
  isFilled() {
    return this.process !== undefined;
  }
  changeListOrder() {
    const listBackUp = [];
    if (this.processRecurrent.length === 0) {
      this.processRecurrent.push(...this.process.processList);
    }
    let randomNum1 = 0;
    let randomNum2 = 0;
    console.log('array #1', this.processRecurrent);
    do {
      randomNum1 = Math.floor(Math.random() * this.processRecurrent.length);
      randomNum2 = Math.floor(Math.random() * this.processRecurrent.length);
    } while (randomNum1 <= randomNum2);

    for (let index = 0; index < this.processRecurrent.length; index++) {
      if ( index < randomNum2 || index > randomNum1) {
        listBackUp.push(this.processRecurrent[index]);
      } else if (index === randomNum2) {
        listBackUp.push(this.processRecurrent[randomNum1]);
      } else {
        listBackUp.push(this.processRecurrent[index - 1]);
      }
    }
    console.log('array #2', listBackUp);
    this.processChanged = listBackUp;
    this.lastValueList = [];
    this.lastValueList.push(...this.processRecurrent);
    console.log('array #3', this.lastValueList);
    this.processRecurrent = [];
    this.processRecurrent.push(...listBackUp);
    this.numberOne = randomNum1;
    this.numberTwo = randomNum2;
    return {listBackUp, randomNum1, randomNum2};
  }
}
