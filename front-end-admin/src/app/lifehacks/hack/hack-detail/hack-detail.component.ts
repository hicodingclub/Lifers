import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { HackComponent, ViewType } from '../hack.component';
import { HackService } from '../hack.service';




@Component({
  selector: 'app-hack-detail',
  templateUrl: './hack-detail.component.html',
  styleUrls: ['./hack-detail.component.css']
})
export class HackDetailComponent extends HackComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected hackService: HackService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                hackService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('title');
          this.stringFields.push('description');







  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
