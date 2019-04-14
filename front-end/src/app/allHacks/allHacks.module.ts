import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HacksComponent } from './Hacks/Hacks.component';
import { allHacksComponent } from './allHacks.component';

import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    HacksComponent,
    allHacksComponent,

  ],
  providers: [
  ],

  exports: [
    HacksComponent,
    allHacksComponent,

  ],
  entryComponents: [

  ]
})
export class allHacksModule { }
