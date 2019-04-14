import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { LiferService } from './lifer.service';

const itemCamelName = 'lifer';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class LiferComponent extends BaseComponent {


    @ViewChild('LifehacksModal') protected focusEl: ElementRef;

    constructor(

      protected liferService: LiferService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(liferService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['email', ];
    }
}
