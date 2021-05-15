import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../_services/weapon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weapons: any;

  constructor(private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.getAllWeapons();
  }
 async getAllWeapons(){
  const resp: any = await this.weaponService.getAllWeapons();
  this.weapons = resp.data;
 console.log(this.weapons)
 }
}
