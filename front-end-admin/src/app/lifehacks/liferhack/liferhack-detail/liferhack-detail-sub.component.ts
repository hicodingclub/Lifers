import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { LiferhackDetailComponent } from './liferhack-detail.component';
import { LiferhackService } from '../liferhack.service';

@Component({
  selector: 'app-liferhack-detail-sub',
  templateUrl: './liferhack-detail-sub.component.html',
  styleUrls: ['./liferhack-detail.component.css']
})
export class LiferhackDetailSubComponent extends LiferhackDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        protected liferhackService: LiferhackService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,liferhackService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}