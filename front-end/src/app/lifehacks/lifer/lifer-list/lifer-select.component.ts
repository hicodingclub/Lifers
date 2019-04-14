import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { LiferListComponent } from './lifer-list.component';
import { LiferService } from '../lifer.service';

@Component({
  selector: 'app-lifer-select',
  templateUrl: './lifer-select.component.html',
  styleUrls: ['./lifer-list.component.css']
})
export class LiferSelectComponent extends LiferListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected liferService: LiferService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(liferService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
