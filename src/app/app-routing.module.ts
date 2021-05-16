import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import { AgentsComponent } from './agents/agents.component';
import { HomeComponent } from './home/home.component';
import { WeaponComponent } from './weapon/weapon.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path: 'weapons' ,component:WeaponsComponent},
  {path: 'agents' ,component:AgentsComponent},
  {path: 'weapon/:id' ,component:WeaponComponent},
  {path: 'agent/:id' ,component:AgentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
