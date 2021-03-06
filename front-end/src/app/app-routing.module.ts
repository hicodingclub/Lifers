import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { allHacksComponent } from './allHacks/allHacks.component';
import { LifehacksComponent } from './lifehacks/lifehacks.component';
import { publicRoutingPath } from './home/public-routing';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: "home",  component: HomeComponent },
	{ path: "public", children: publicRoutingPath },
    { path: "allHacks", component: allHacksComponent},
    { path: "lifehacks", component: LifehacksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
