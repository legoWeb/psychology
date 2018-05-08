import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-scale',
  template: `
    <div>
      <ngx-charts-bar-horizontal
        [view]="[700, 150]"
        [scheme]="colorScheme"
        [results]="[{
    name: 'Ваш результат',
    value: valueForScale}]"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [xScaleMax]="100">
      </ngx-charts-bar-horizontal>
      <h4>{{showResultText}}</h4>
    </div>`
})
export class SingleScaleComponent implements OnInit {

  @Input() valueForScale: number;

  showResultText: string;

  showXAxis = true;
  showYAxis = true;
  gradient = true;

  colorScheme: object = {domain: ['#A10A28']};

  constructor() {
  }

  ngOnInit() {
    if (this.valueForScale < 20) {
      return this.colorScheme = {domain: ['#DD4837']},
        this.showResultText = 'У Вас низкий показатель. Возможно Вам следует обратится к психологу';
    } else if (this.valueForScale < 40) {
      return this.colorScheme = {domain: ['#EFD334']},
        this.showResultText = 'Пониженный показатель. Это говорит о том что Вы не являетесь счастливым человеком! Нужно это исправлять';
    } else if (this.valueForScale < 60) {
      return this.colorScheme = {domain: ['#3BBF4A']},
        this.showResultText = 'Средний показатель. Все идет своим чередом! Возможно Вам нужен еще один отпуск для более лучших показателей';
    } else if (this.valueForScale < 80) {
      return this.colorScheme = {domain: ['#66FF00']},
        this.showResultText = 'Повышенный показатель. Вы полностью довольны своей жизнью';
    } else if (this.valueForScale < 100) {
      return this.colorScheme = {domain: ['#54FF9F']},
        this.showResultText = 'Высокий показатель. Да ты счастливый человек';
    }
  }
}
