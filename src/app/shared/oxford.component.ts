import {Component} from '@angular/core';

@Component({
  selector: 'app-oxford',
  template: `
    <app-progress-bar [widthCount]="widthCount" [counter]="counter" [lengthOfArray]="lengthOfArray"></app-progress-bar>
    <h5 class="text-center" *ngIf="counter !== 29; else setResultBtn">
      <div><h2>Вопрос номер : {{counter +1}}</h2></div>
      Какое утверждение лучше всего описывает ваши ощущения?
    </h5>
    <ng-template #setResultBtn>
      <h2 class="text-capitalize"> Ваш результат составляет {{setResult()}} %</h2>
      <app-single-scale [valueForScale]="setResult()"></app-single-scale>
    </ng-template>
    <div class="btn-group btn-group-vertical col-12 m-1"
         *ngFor="let c of OHI[counter]">
      <button class="btn btn-outline-secondary" (click)="increment(c.current)">{{c.value}}</button>
    </div>`
})

export class OxfordComponent {
  counter = 0;
  total = [];
  widthCount = 3.45;
  OHI = [
    [
      {current: 0, value: 'Я не чувствую себя счастливым'},
      {current: 1, value: 'Я чувствую себя довольно счастливым'},
      {current: 2, value: 'Я очень счастлив'},
      {current: 3, value: 'Я невероятно счастлив'}
    ],
    [
      {current: 0, value: 'Я смотрю в будущее без особого оптимизма'},
      {current: 1, value: 'Я смотрю в будущее с оптимизмом'},
      {current: 2, value: 'Мне кажется, будущее сулит мне много хорошего'},
      {current: 3, value: 'Я чувчтвую, что будущее переполнено надеждами и перспективами'}
    ],
    [
      {current: 0, value: 'Ничто в моей жизни по настоящему меня не удовлетворяет'},
      {current: 1, value: 'Рекоторые вещи меня удовлетворяют'},
      {current: 2, value: 'Меня удовлетворяет многое в моей жизни'},
      {current: 3, value: 'Я полностью удовлетворен в своей жизни'}
    ],
    [
      {current: 0, value: 'Я не ощущаю, что в жизни что-либо реально находится в моей власти'},
      {current: 1, value: 'Я чувствую, что контролирую свою жизнь, по крайней мере — отчасти'},
      {current: 2, value: 'Я чувствую, что в основном контролирую свою жизнь'},
      {current: 3, value: 'Я чувствую, что целиком контролирую все стороны своей жизни'}
    ],
    [
      {current: 0, value: 'я не ощущаю, что жизнь вознаграждает меня по заслугам'},
      {current: 1, value: 'я ощущаю, что в жизни мне воздается по заслугам'},
      {current: 2, value: 'я ощущаю, что жизнь щедро вознаграждает меня'},
      {current: 3, value: 'я ощущаю, что жизнь переполнена подарками'}
    ],
    [
      {current: 0, value: 'я не испытываю никакой удовлетворенности жизнью'},
      {current: 1, value: 'я доволен тем, как я живу'},
      {current: 2, value: 'я очень доволен тем, как я живу'},
      {current: 3, value: 'я в восторге от своей жизни'}
    ],
    [
      {current: 0, value: 'я никогда не могу повлиять на события в нужном мне направлении'},
      {current: 1, value: 'иногда я способен повлиять на события в нужном мне направлении'},
      {current: 2, value: 'я часто влияю на события в нужном мне направлении'},
      {current: 3, value: 'я всегда влияю на события в нужном мне направлении'}
    ],
    [
      {current: 0, value: 'в жизни я просто выживаю'},
      {current: 1, value: 'жизнь — хорошая вещь'},
      {current: 2, value: 'жизнь — замечательная вещь'},
      {current: 3, value: 'я обожаю жизнь'}
    ],
    [
      {current: 0, value: 'у меня потерян всякий интерес к другим людям'},
      {current: 1, value: 'другие люди интересны мне отчасти'},
      {current: 2, value: 'другие люди меня очень интересуют'},
      {current: 3, value: 'меня чрезвычайно интересуют другие люди'}
    ],
    [
      {current: 0, value: 'мне трудно принимать решения'},
      {current: 1, value: 'я довольно легко принимаю некоторые решения'},
      {current: 2, value: 'мне довольно просто принимать большинство решений'},
      {current: 3, value: 'я с легкостью принимаю любые решения'}
    ],
    [
      {current: 0, value: 'мне трудно приступить к какому-либо делу'},
      {current: 1, value: 'мне довольно просто что-либо начать'},
      {current: 2, value: 'я без труда принимаюсь за какое-либо дело'},
      {current: 3, value: 'я способен взяться за любое дело'}
    ],
    [
      {current: 0, value: 'после сна я редко чувствую себя отдохнувшим'},
      {current: 1, value: 'иногда я просыпаюсь отдохнувшим'},
      {current: 2, value: 'после сна я обычно чувствую себя отдохнувшим'},
      {current: 3, value: 'я всегда просыпаюсь отдохнувшим'}
    ],
    [
      {current: 0, value: 'я чувствую себя совершенно без сил'},
      {current: 1, value: 'я чувствую себя довольно энергичным'},
      {current: 2, value: 'я чувствую себя очень энергичным'},
      {current: 3, value: 'я чувствую, что энергия во мне бьет через край'}
    ],
    [
      {current: 0, value: 'я не вижу в окружающих меня вещах особой красоты'},
      {current: 1, value: 'я нахожу красоту в некоторых вещах'},
      {current: 2, value: 'я нахожу красоту в большинстве вещей'},
      {current: 3, value: 'весь мир представляется мне прекрасным'}
    ],
    [
      {current: 0, value: 'я не ощущаю себя сообразительным'},
      {current: 1, value: 'я чувствую, что отчасти сметлив'},
      {current: 2, value: 'я в значительной степени чувствую в себе живость ума'},
      {current: 3, value: 'я ощущаю, что мне присуща совершенная живость ума'}
    ],
    [
      {current: 0, value: 'я не чувствую себя особенно здоровым'},
      {current: 1, value: 'я чувствую себя достаточно здоровым'},
      {current: 2, value: 'я чувствую себя совершенно здоровым'},
      {current: 3, value: 'я чувствую себя здоровым на 100%'}
    ],
    [
      {current: 0, value: 'я не испытываю особо теплых чувств по отношению к другим'},
      {current: 1, value: 'я испытываю определенные теплые чувства по отношению к другим'},
      {current: 2, value: 'я испытываю очень теплые чувства по отношению к другим'},
      {current: 3, value: 'я люблю всех людей'}
    ],
    [
      {current: 0, value: 'у меня практически нет счастливых воспоминаний'},
      {current: 1, value: 'у меня есть отдельные счастливые воспоминания'},
      {current: 2, value: 'большинство произошедших со мной событий представляются мне счастливыми'},
      {current: 3, value: 'все происшедшее кажется мне чрезвычайно счастливым'}
    ],
    [
      {current: 0, value: 'я никогда не бываю в радостном или приподнятом настроении'},
      {current: 1, value: 'иногда я испытываю радость и пребываю в приподнятом настроении'},
      {current: 2, value: 'я часто испытываю радость и пребываю в приподнятом настроении'},
      {current: 3, value: 'я все время радуюсь и пребываю в приподнятом настроении'}
    ],
    [
      {current: 0, value: 'между тем, что я хотел бы сделать, и тем, что сделал, — большая разница'},
      {current: 1, value: 'кое-что из желаемого я сделал'},
      {current: 2, value: 'я сделал многое из того, что хотел'},
      {current: 3, value: 'я сделал все, чего когда-либо желал'}
    ],
    [
      {current: 0, value: 'я не способен хорошо организовать свое время'},
      {current: 1, value: 'я организую свое время достаточно хорошо'},
      {current: 2, value: 'я очень хорошо организую свое время'},
      {current: 3, value: 'мне удается успеть все, что я хочу сделать'}
    ],
    [
      {current: 0, value: 'мне не бывает весело в компании других людей'},
      {current: 1, value: 'иногда мне бывает весело с другими людьми'},
      {current: 2, value: 'мне часто бывает весело с другими людьми'},
      {current: 3, value: 'мне всегда весело в окружении людей'}
    ],
    [
      {current: 0, value: 'я никогда не подбадриваю окружающих'},
      {current: 1, value: 'иногда я подбадриваю окружающих'},
      {current: 2, value: 'я часто подбадриваю окружающих'},
      {current: 3, value: 'я всегда подбадриваю окружающих'}
    ],
    [
      {current: 0, value: 'у меня нет ощущения осмысленности и цели в жизни'},
      {current: 1, value: 'у меня есть ощущение смысла и цели в жизни'},
      {current: 2, value: 'у меня ясное ощущение смысла и цели в жизни'},
      {current: 3, value: 'моя жизнь полна смысла и имеет цель'}
    ],
    [
      {current: 0, value: 'я не ощущаю особой привязанности к другим и сопричастности'},
      {current: 1, value: 'иногда я ощущаю привязанность к людям и сопричастность'},
      {current: 2, value: 'я часто ощущаю привязанность и сопричастность'},
      {current: 3, value: 'я всегда ощущаю привязанность и сопричастность'}
    ],
    [
      {current: 0, value: 'не думаю, что мир — это стоящее место'},
      {current: 1, value: 'думаю, что мир — довольно хорошее место'},
      {current: 2, value: 'думаю, что мир — это замечательное место'},
      {current: 3, value: 'по-моему, мир — это превосходное место'}
    ],
    [
      {current: 0, value: 'я редко смеюсь'},
      {current: 1, value: 'я смеюсь довольно часто'},
      {current: 2, value: 'я много смеюсь'},
      {current: 3, value: 'я очень часто смеюсь'}
    ],
    [
      {current: 0, value: 'я думаю, что выгляжу непривлекательно'},
      {current: 1, value: 'я думаю, что выгляжу довольно привлекательно'},
      {current: 2, value: 'я думаю, что выгляжу привлекательно'},
      {current: 3, value: 'я думаю, что выгляжу очень привлекательно'}
    ],
    [
      {current: 0, value: 'я не нахожу вокруг ничего забавного и интересного'},
      {current: 1, value: 'некоторые вещи я нахожу забавными'},
      {current: 2, value: 'большинство вещей кажутся мне забавными'},
      {current: 3, value: 'мне все кажется забавным и интересным'}
    ]
  ];

  lengthOfArray = this.OHI.length;

  increment(val) {
    this.counter++;
    this.widthCount += 3.45;
    this.total.push(val);
  }

  setResult() {
    let totalValue = this.total.reduce((a, b) => a + b);
    totalValue = totalValue / 87 * 100;
    return Math.round(totalValue);
  }
}
