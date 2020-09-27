import { Component, OnInit } from '@angular/core';
import { ProcessInfoService } from 'src/app/services/process-info.service';

@Component({
  selector: 'app-feedback-proyecto',
  templateUrl: './feedback-proyecto.component.html',
  styleUrls: ['./feedback-proyecto.component.scss']
})
export class FeedbackProyectoComponent implements OnInit {
  process: any;
  listBackUp: [];
  randomNumberOne: number;
  randomNumberTwo: number;
  constructor(
    private processService: ProcessInfoService
  ) { }

  ngOnInit() {
    this.process = this.processService.getProcess();
    const bodyInfo = this.processService.getProccessChanged();
    this.listBackUp = bodyInfo.processChanged;
    this.randomNumberOne = bodyInfo.num1;
    this.randomNumberTwo = bodyInfo.num2;
    console.log('info ---->', this.process, 'body--->', bodyInfo);
  }

}
