import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({ providedIn: 'root' })

export class MapService {
  constructor(private http: HttpClient) {}

  getAllMaps() {
    return this.http
      .get(`${environment.apiUrl}/maps?language=pt-BR`)
      .toPromise();
  }
  getMapDetails(id){
    return this.http
    .get(`${environment.apiUrl}/maps/${id}?language=pt-BR`)
    .toPromise();
  }
}
