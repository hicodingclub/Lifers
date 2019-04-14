import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { LifehacksComponent } from './lifehacks.component';
import { LifehacksRoutes } from '../lifehacks.conf';

@NgModule({
  imports: [RouterModule.forChild(LifehacksRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class LifehacksRoutingModule { }
