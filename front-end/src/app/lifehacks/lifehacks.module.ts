import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





import { MraModule } from 'mean-rest-angular';

import { LifehacksRoutingModule } from './lifehacks-routing.module';
import { LifehacksComponent } from './lifehacks.component';
import { LifehacksRefSelectDirective } from './lifehacks.component';

import { Lifehacks_SERVER_ROOT_URI } from './lifehacks.tokens';
import { lifehacks_server_root_uri } from '../lifehacks.conf';

// Import components for each schema

import { HackListComponent } from './hack/hack-list/hack-list.component';
import { HackDetailComponent } from './hack/hack-detail/hack-detail.component';
import { HackEditComponent } from './hack/hack-edit/hack-edit.component';
import { HackService } from './hack/hack.service';

import { LiferhackListComponent } from './liferhack/liferhack-list/liferhack-list.component';
import { LiferhackDetailComponent } from './liferhack/liferhack-detail/liferhack-detail.component';
import { LiferhackEditComponent } from './liferhack/liferhack-edit/liferhack-edit.component';
import { LiferhackService } from './liferhack/liferhack.service';

import { LiferListComponent } from './lifer/lifer-list/lifer-list.component';
import { LiferDetailComponent } from './lifer/lifer-detail/lifer-detail.component';
import { LiferEditComponent } from './lifer/lifer-edit/lifer-edit.component';
import { LiferService } from './lifer/lifer.service';


import { LiferSelectComponent } from './lifer/lifer-list/lifer-select.component';
import { LiferDetailPopComponent } from './lifer/lifer-detail/lifer-detail-pop.component';
import { LiferDetailSelComponent } from './lifer/lifer-detail/lifer-detail-sel.component';
import { HackSelectComponent } from './hack/hack-list/hack-select.component';
import { HackDetailPopComponent } from './hack/hack-detail/hack-detail-pop.component';
import { HackDetailSelComponent } from './hack/hack-detail/hack-detail-sel.component';

import { LiferhackListSubComponent } from './liferhack/liferhack-list/liferhack-list-sub.component';
import { LiferhackDetailSubComponent } from './liferhack/liferhack-detail/liferhack-detail-sub.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    MraModule,

    LifehacksRoutingModule
  ],
  declarations: [
    LifehacksComponent,
    LifehacksRefSelectDirective,

    HackListComponent,
    HackDetailComponent,
    HackEditComponent,
    LiferhackListComponent,
    LiferhackDetailComponent,
    LiferhackEditComponent,
    LiferListComponent,
    LiferDetailComponent,
    LiferEditComponent,

    LiferSelectComponent,
    LiferDetailPopComponent,
    LiferDetailSelComponent,
    HackSelectComponent,
    HackDetailPopComponent,
    HackDetailSelComponent,

    LiferhackListSubComponent,
    LiferhackDetailSubComponent,




  ],
  exports: [
    LifehacksComponent,

    HackListComponent,
    HackDetailComponent,
    HackEditComponent,
    LiferhackListComponent,
    LiferhackDetailComponent,
    LiferhackEditComponent,
    LiferListComponent,
    LiferDetailComponent,
    LiferEditComponent,

    LiferSelectComponent,
    LiferDetailPopComponent,
    LiferDetailSelComponent,
    HackSelectComponent,
    HackDetailPopComponent,
    HackDetailSelComponent,

    LiferhackListSubComponent,
    LiferhackDetailSubComponent,
  ],
  providers: [
    { provide: Lifehacks_SERVER_ROOT_URI, useValue: lifehacks_server_root_uri },


    HackService,
    LiferhackService,
    LiferService,
  ],

  entryComponents: [

    LiferSelectComponent,
    LiferDetailPopComponent,
    LiferDetailSelComponent,
    HackSelectComponent,
    HackDetailPopComponent,
    HackDetailSelComponent,
  ]
})
export class LifehacksModule { }
