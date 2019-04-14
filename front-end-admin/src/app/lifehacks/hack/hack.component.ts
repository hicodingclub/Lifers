import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { HackService } from './hack.service';

const itemCamelName = 'hack';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class HackComponent extends BaseComponent {


    @ViewChild('LifehacksModal') protected focusEl: ElementRef;

    constructor(

      protected hackService: HackService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(hackService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['title', ];
    }
}
