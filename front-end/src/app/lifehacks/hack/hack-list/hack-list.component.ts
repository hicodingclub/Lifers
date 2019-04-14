import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { HackComponent, ViewType } from '../hack.component';
import { HackService } from '../hack.service';



@Component({
  selector: 'app-hack-list',
  templateUrl: './hack-list.component.html',
  styleUrls: ['./hack-list.component.css']
})
export class HackListComponent extends HackComponent implements OnInit {


  constructor(

      protected hackService: HackService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                hackService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('title');






          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
