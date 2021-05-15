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
  isLoading: boolean;
  ngOnInit(): void {
    this.getAllWeapons();
  }
  async getAllWeapons(){
    this.isLoading = true;
    try {
      const resp: any = await this.weaponService.getAllWeapons();
      this.weapons = resp.data;
      this.isLoading=false;
    } catch (error) {
      
    }

   }
}
