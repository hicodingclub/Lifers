import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event/event.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './introduction/introduction.component';

import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    EventComponent,
    FaqComponent,
    HomeComponent,
    IntroductionComponent,
  ],
  providers: [
  ],

  exports: [
    EventComponent,
    FaqComponent,
    HomeComponent,
    IntroductionComponent,
  ],
  entryComponents: [

  ]
})
export class HomeModule { }
