import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponComponent } from './weapon/weapon.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentComponent } from './agent/agent.component';
import { MapsComponent } from './maps/maps.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeaponsComponent,
    WeaponComponent,
    AgentsComponent,
    AgentComponent,
    MapsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
