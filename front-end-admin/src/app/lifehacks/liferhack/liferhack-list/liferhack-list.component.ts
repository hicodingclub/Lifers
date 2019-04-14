import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { LiferhackComponent, ViewType } from '../liferhack.component';
import { LiferhackService } from '../liferhack.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-liferhack-list',
  templateUrl: './liferhack-list.component.html',
  styleUrls: ['./liferhack-list.component.css']
})
export class LiferhackListComponent extends LiferhackComponent implements OnInit {


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected liferhackService: LiferhackService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                liferhackService, injector, router, route, location, ViewType.LIST);



          this.referenceFields = ['lifer', 'hack', ];
          this.referenceFieldsMap = {'lifer': 'lifer','hack': 'hack',};





          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
