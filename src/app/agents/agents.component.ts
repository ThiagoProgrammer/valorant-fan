import { Component, OnInit } from '@angular/core';
import { AgentService } from '../_services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
isLoading : boolean;
agents : any;
  constructor(private agentService: AgentService) { 

  }

  ngOnInit(): void {
    this.getAllAgents();
  }
  async getAllAgents(){
    this.isLoading = true;
    try {
      const resp: any = await this.agentService.getAllAgents();
      this.agents = resp.data;
      console.log(this.agents)
      this.isLoading=false;
    } catch (error) {
      
    }

   }

}
