import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProcessInfoService} from './../../services/process-info.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  processList = [];
  nameList = [];
  showProcesses: boolean;
  item: any = {
    name: '',
    processLength: '8',
    processList: ''
  };

  constructor( private processService: ProcessInfoService) { }

  ngOnInit() {
    this.showProcesses = false;
    this.processService.setShowProcesses(this.showProcesses);
  }
  cambiarEstado() {
    this.showProcesses = false;
    this.processService.setShowProcesses(this.showProcesses);
    this.processService.addProcess(undefined);
  }
  agregar() {
    if (this.item.name === '') {
      alert('Por favor digita el nombre del proyecto');
    } else {
      this.processList.length = this.item.processLength;
      this.showProcesses = true;
      this.processService.setShowProcesses(this.showProcesses);
    }
    console.log('entra', this.item);
  }
  continue() {
    console.log('continue', this.processList);
    console.log('name', this.nameList);
    let flag = false;
    this.processList.forEach((process, index) => {
      if (this.nameList[index] === undefined ) {
        flag = true;
      }
    });
    if (flag || this.nameList.length !== +this.item.processLength) {
      alert('Hay campos vacios');
    } else {
      this.item.processList = [];
      this.nameList.forEach(item => {
        this.item.processList.push({name: item});
      });
      console.log('exito', this.item.processList);
      this.processService.addProcess(this.item);
    }


  }
}
