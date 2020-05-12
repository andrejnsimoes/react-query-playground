import React from "react";
import { useAgent } from "../hooks/useAgent";
import { Button } from "@material-ui/core";

const AgentDetails: React.FC = () => {
  const agentId = "1";
  const { agent, isLoadingAgent } = useAgent({ agentId });

  // const { agent, isLoadingAgent } = useAgent({
  //   agentId,
  //   options: { withTeam: true }
  // });

  if (isLoadingAgent) return <div>Loading...</div>;

  return (
    <>
      <Button variant="contained" color="primary">
        <pre>{JSON.stringify(agent)}</pre>
      </Button>
    </>
  );
};

export default AgentDetails;
