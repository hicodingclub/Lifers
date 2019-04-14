import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { LiferComponent, ViewType } from '../lifer.component';
import { LiferService } from '../lifer.service';



@Component({
  selector: 'app-lifer-list',
  templateUrl: './lifer-list.component.html',
  styleUrls: ['./lifer-list.component.css']
})
export class LiferListComponent extends LiferComponent implements OnInit {


  constructor(

      protected liferService: LiferService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                liferService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');






          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
