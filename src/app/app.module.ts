import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';
import { InjectionToken } from '@angular/core';


export const dc= new InjectionToken<Document>('doc')
export const ab= new InjectionToken('abc')


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [TimerService,
  {
    provide: dc,
    useValue: document,
  },
  {
    provide: ab,
    useValue: setInterval,
  }
],
})
export class AppModule {}
