import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { LiferhackComponent, ViewType } from '../liferhack.component';
import { LiferhackService } from '../liferhack.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-liferhack-detail',
  templateUrl: './liferhack-detail.component.html',
  styleUrls: ['./liferhack-detail.component.css']
})
export class LiferhackDetailComponent extends LiferhackComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected liferhackService: LiferhackService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                liferhackService, injector, router, route, location, ViewType.DETAIL);



          this.referenceFields = ['lifer', 'hack', ];
          this.referenceFieldsMap = {'lifer': 'lifer','hack': 'hack',};






  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
