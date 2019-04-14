import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from './auth/auth.module';

import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { PublicinfoModule } from './publicinfo/publicinfo.module';
import { LifehacksModule } from './lifehacks/lifehacks.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AuthenticationModule,

    HomeModule,
    UsersModule,
    PublicinfoModule,
    LifehacksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
