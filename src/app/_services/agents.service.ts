import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({ providedIn: 'root' })

export class AgentService {
  constructor(private http: HttpClient) {}

  getAllAgents() {
    return this.http
      .get(`${environment.apiUrl}/agents?language=pt-BR`)
      .toPromise();
  }
  getAgentDetails(id){
    return this.http
    .get(`${environment.apiUrl}/agents/${id}?language=pt-BR`)
    .toPromise();
  }
}
