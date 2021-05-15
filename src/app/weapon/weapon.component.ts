import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponService } from '../_services/weapon.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  id: any;
  isLoading: boolean;
  weapon: any;
  constructor(private _Activatedroute:ActivatedRoute, private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.getWeaponDetails();
  }
 async getWeaponDetails(){
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.isLoading = true;
    try {
      const resp: any = await this.weaponService.getWeaponDetails(this.id);
      this.weapon = resp.data;
      this.isLoading=false;
    } catch (error) {
      
    }

   }
  }

