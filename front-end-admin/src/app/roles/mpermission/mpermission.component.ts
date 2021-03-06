import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, ViewType } from 'mean-rest-angular';
import { Injector } from '@angular/core';
import { MpermissionService } from './mpermission.service';

const itemCamelName = 'mpermission';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { RolesRefSelectDirective } from '../roles.component';

import { MroleDetailSelComponent } from '../mrole/mrole-detail/mrole-detail-sel.component';
import { MroleDetailPopComponent } from '../mrole/mrole-detail/mrole-detail-pop.component';
import { MroleSelectComponent } from '../mrole/mrole-list/mrole-select.component';
import { MmoduleDetailSelComponent } from '../mmodule/mmodule-detail/mmodule-detail-sel.component';
import { MmoduleDetailPopComponent } from '../mmodule/mmodule-detail/mmodule-detail-pop.component';
import { MmoduleSelectComponent } from '../mmodule/mmodule-list/mmodule-select.component';


export class MpermissionComponent extends BaseComponent {

    protected selectComponents = {

      'role': {
          'select-type':MroleSelectComponent,
          'select-detail-type': MroleDetailSelComponent,
          'pop-detail-type': MroleDetailPopComponent,
          'componentRef': null},
      'module': {
          'select-type':MmoduleSelectComponent,
          'select-detail-type': MmoduleDetailSelComponent,
          'pop-detail-type': MmoduleDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(RolesRefSelectDirective) refSelectDirective: RolesRefSelectDirective;



    constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpermissionService: MpermissionService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location,
      protected view: ViewType ) {
        super(mpermissionService, injector, router, route, location, view, itemCamelName);
        
        this.indexFields = ['role', ];
    }
}
