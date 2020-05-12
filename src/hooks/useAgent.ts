import { useQuery } from "react-query";
import { getAgent, getAgentTeam } from "../api";

//#region types

interface useAgentParams {
  agentId: string;
  options?: { withTeam: boolean | undefined; };
}

interface Team {
  id: string;
  name: string;
}

interface Agent {
  id: string;
  name: string;
  team?: Team
}

type Hook = (params: useAgentParams) => 
  {agent: Agent | unknown, isLoadingAgent: boolean};

//#endregion types

export const useAgent: Hook = ({ agentId, options }) => {
  // getting agent
  const { data: agent, isFetching: isLoadingAgent } = useQuery(
    ["agent", agentId],
    getAgent
  );

  // getting agent team
  const { data: agentTeam, isFetching: isLoadingAgentTeam } = useQuery(
    options?.withTeam && ["agentTeam", agentId],
    getAgentTeam
  );

  if (options?.withTeam) {
    const isFetching = isLoadingAgent || isLoadingAgentTeam;

    if (isFetching) 
      return { agent: null, isLoadingAgent: isFetching };

    const newAgent = { ...agent, team: agentTeam };
    return { agent: newAgent, isLoadingAgent: isFetching };
  }

  return { agent, isLoadingAgent };
};
