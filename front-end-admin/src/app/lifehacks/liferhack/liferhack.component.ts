import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { LiferhackService } from './liferhack.service';

const itemCamelName = 'liferHack';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { LifehacksRefSelectDirective } from '../lifehacks.component';

import { LiferDetailSelComponent } from '../lifer/lifer-detail/lifer-detail-sel.component';
import { LiferDetailPopComponent } from '../lifer/lifer-detail/lifer-detail-pop.component';
import { LiferSelectComponent } from '../lifer/lifer-list/lifer-select.component';
import { HackDetailSelComponent } from '../hack/hack-detail/hack-detail-sel.component';
import { HackDetailPopComponent } from '../hack/hack-detail/hack-detail-pop.component';
import { HackSelectComponent } from '../hack/hack-list/hack-select.component';


export class LiferhackComponent extends BaseComponent {

    protected selectComponents = {

      'lifer': {
          'select-type':LiferSelectComponent,
          'select-detail-type': LiferDetailSelComponent,
          'pop-detail-type': LiferDetailPopComponent,
          'componentRef': null},
      'hack': {
          'select-type':HackSelectComponent,
          'select-detail-type': HackDetailSelComponent,
          'pop-detail-type': HackDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(LifehacksRefSelectDirective) refSelectDirective: LifehacksRefSelectDirective;



    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected liferhackService: LiferhackService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(liferhackService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['lifer', ];
    }
}
