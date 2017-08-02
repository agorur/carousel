import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { WaterfallsComponent } from './waterfalls/waterfalls.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    WaterfallsComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'animal',
        component: AnimalsComponent
      },
      {
        path: 'waterfall',
        component: WaterfallsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
