// Import components for each schema

import { HackListComponent } from './hack/hack-list/hack-list.component';
import { HackDetailComponent } from './hack/hack-detail/hack-detail.component';
import { HackEditComponent } from './hack/hack-edit/hack-edit.component';


import { LiferhackListComponent } from './liferhack/liferhack-list/liferhack-list.component';
import { LiferhackDetailComponent } from './liferhack/liferhack-detail/liferhack-detail.component';
import { LiferhackEditComponent } from './liferhack/liferhack-edit/liferhack-edit.component';

import { LiferhackListSubComponent } from './liferhack/liferhack-list/liferhack-list-sub.component';


import { LiferListComponent } from './lifer/lifer-list/lifer-list.component';
import { LiferDetailComponent } from './lifer/lifer-detail/lifer-detail.component';
import { LiferEditComponent } from './lifer/lifer-edit/lifer-edit.component';




const liferhackSubPath = [
    {path: 'list', component: LiferhackListSubComponent}
];


const hackDetailPath = [

    {path: 'liferhack', children: liferhackSubPath,
        data: {'mraLevel': 2, 'item': 'liferhack'}},
];

const liferDetailPath = [

    {path: 'liferhack', children: liferhackSubPath,
        data: {'mraLevel': 2, 'item': 'liferhack'}},
];


export const hackRoutingPath = [
    {path: 'list', component: HackListComponent},
    {path: 'detail/:id', component: HackDetailComponent, children: hackDetailPath},
    {path: 'edit/:id', component: HackEditComponent},
    {path: 'new', component: HackEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const liferhackRoutingPath = [
    {path: 'list', component: LiferhackListComponent},
    {path: 'detail/:id', component: LiferhackDetailComponent},
    {path: 'edit/:id', component: LiferhackEditComponent},
    {path: 'new', component: LiferhackEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const liferRoutingPath = [
    {path: 'list', component: LiferListComponent},
    {path: 'detail/:id', component: LiferDetailComponent, children: liferDetailPath},
    {path: 'edit/:id', component: LiferEditComponent},
    {path: 'new', component: LiferEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
