import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `<div class="progress text-center m-1" style="height: 40px;">
    <div class="progress-bar progress-bar-striped bg-success"
         role="progressbar"
         aria-valuenow="0"
         aria-valuemin="50"
         aria-valuemax="100"
        [ngStyle]="{width: [widthCount] + '%'}">
        {{counter}} из {{lengthOfArray}}
  </div>
  </div>`
})
export class ProgressBarComponent {
  @Input() widthCount: number;
  @Input() counter: number;
  @Input() lengthOfArray: any;
}
