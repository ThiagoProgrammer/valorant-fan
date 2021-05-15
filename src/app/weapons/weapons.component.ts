import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../_services/weapon.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  constructor(private weaponService: WeaponService) { }
  weapons: any;
  ngOnInit(): void {
    this.getAllWeapons();
  }
  async getAllWeapons(){
    const resp: any = await this.weaponService.getAllWeapons();
    this.weapons = resp.data;
   console.log(this.weapons)
   }
}
