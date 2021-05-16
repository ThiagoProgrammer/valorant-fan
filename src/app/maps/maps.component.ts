import { Component, OnInit } from '@angular/core';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  isLoading: boolean;
  maps: any;
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.getAllMaps();
  }
  async getAllMaps(){
    this.isLoading = true;
    try {
      const resp: any = await this.mapService.getAllMaps();
      this.maps = resp.data;
      console.log(this.maps)
      this.isLoading=false;
    } catch (error) {
      
    }

   }
}
