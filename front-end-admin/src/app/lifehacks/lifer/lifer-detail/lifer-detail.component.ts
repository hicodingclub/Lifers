import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { LiferComponent, ViewType } from '../lifer.component';
import { LiferService } from '../lifer.service';




@Component({
  selector: 'app-lifer-detail',
  templateUrl: './lifer-detail.component.html',
  styleUrls: ['./lifer-detail.component.css']
})
export class LiferDetailComponent extends LiferComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected liferService: LiferService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                liferService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');
          this.stringFields.push('email');







  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
