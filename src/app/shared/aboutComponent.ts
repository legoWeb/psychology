import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="text-center"><p>
      Всем привет! Меня зовут Олег! И эта одна из первых работ, которую я пишу на <b>"Angular5", "Bootstrap4"</b>!<br>
      Я не брал на себя сложных задач, так как на данном этапе они для меня не выполнимы!<br>
      В "тестах" я применил библиотеку <b>"@swimlane/ngx-charts"</b> для отображения шкалы!<br>
      В "интересных статьях" просто поработал немного с HTML кодом.<br>
      "Лучшие цитаты Фрейда": прикрепил <b>"ui-carousel"</b>.<br>
      Весь код залит на ресурс <a href="">GitHub</a>.
    </p></div>`
})
export class AboutComponent {
}
