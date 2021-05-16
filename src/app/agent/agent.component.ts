import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../_services/agents.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
isLoading:boolean;
agent:any;
id:any;
  constructor(private agentService:AgentService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAgentDetails();
  }
  async getAgentDetails(){
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.isLoading = true;
    try {
      const resp: any = await this.agentService.getAgentDetails(this.id);
      this.agent = resp.data;
      this.isLoading=false;
    } catch (error) {
      
    }

   }

}
