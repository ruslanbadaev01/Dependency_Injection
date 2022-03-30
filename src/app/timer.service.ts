import { Injectable } from '@angular/core';
import { dc,ab } from './app.module';
import { Inject } from '@angular/core';


type SetIntervalFunction = (callback: () => void, ms: number, ...args: any[]) => any;

@Injectable()
export class TimerService {
  constructor(
    @Inject(dc)
    private document:Document,
    @Inject(ab)
    private setInterval:SetIntervalFunction
  ) {}

  public start() {
    const timerOutputElement = this.document.querySelector('#timer-output');
    let counter: number = 0;
    this.setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
    console.log(Math.random);
  }
}
