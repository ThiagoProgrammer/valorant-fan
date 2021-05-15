import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path: 'weapons' ,component:WeaponsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
