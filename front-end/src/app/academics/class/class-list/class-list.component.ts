import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { ClassComponent, ViewType } from '../class.component';
import { ClassService } from '../class.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent extends ClassComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected classService: ClassService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                classService, injector, router, route, location, ViewType.LIST);

          this.enums['dayOfWeek'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];

          this.stringFields.push('title');

          this.referenceFields = ['course', 'teacher', ];
          this.referenceFieldsMap = {'course': 'course','teacher': 'teacher',};

          this.dateFields = ['startTime', 'endTime', ];


          this.multiSelectionFields = ['dayOfWeek', ];


          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
