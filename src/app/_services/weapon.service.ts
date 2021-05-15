import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({ providedIn: 'root' })

export class WeaponService {
  constructor(private http: HttpClient) {}

  getAllWeapons() {
    return this.http
      .get(`${environment.apiUrl}/weapons?language=pt-BR`)
      .toPromise();
  }
  getWeaponDetails(id){
    return this.http
    .get(`${environment.apiUrl}/weapons/${id}?language=pt-BR`)
    .toPromise();
  }
}
