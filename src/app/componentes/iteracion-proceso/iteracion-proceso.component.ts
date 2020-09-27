import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessInfoService} from './../../services/process-info.service';

@Component({
  selector: 'app-iteracion-proceso',
  templateUrl: './iteracion-proceso.component.html',
  styleUrls: ['./iteracion-proceso.component.scss']
})
export class IteracionProcesoComponent implements OnInit {
  isRandomed = false;
  randomList = [];
  randomNumberOne: number;
  randomNumberTwo: number;
  constructor(public processService: ProcessInfoService, private router: Router) { }

  ngOnInit() {
  }

  aleatorio() {
    const body = this.processService.changeListOrder();
    this.randomList = body.listBackUp;
    this.randomNumberOne = body.randomNum1;
    this.randomNumberTwo = body.randomNum2;
    this.isRandomed = true;
  }
  continue() {
    console.log('calma');
    this.router.navigate(['final']);
  }

}
