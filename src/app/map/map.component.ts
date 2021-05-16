import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  id:any;
  isLoading:boolean;
  map:any;
  constructor(private mapService: MapService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMapDetails();
  }
  async getMapDetails(){
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.isLoading = true;
    try {
      const resp: any = await this.mapService.getMapDetails(this.id);
      this.map = resp.data;
      this.isLoading=false;
    } catch (error) {
      
    }

   }
}
