import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { LiferDetailComponent } from './lifer-detail.component';
import { LiferService } from '../lifer.service';

@Component({
  selector: 'app-lifer-detail-pop',
  templateUrl: './lifer-detail-pop.component.html',
  styleUrls: ['./lifer-detail.component.css']
})
export class LiferDetailPopComponent extends LiferDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected liferService: LiferService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(liferService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}