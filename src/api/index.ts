export const getAgent = (_key: string, agentId: string) => {
  console.log("requesting agent");
  const response = { id: agentId, name: "Zé Carlos" };

  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, response), 2000);
  });
};

export const getAgentTeam = (_key: string, agentId: string) => {
  console.log("requesting agent team");
  const response = { id: "124", name: "Team Zé Carlos" };

  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, response), 2500);
  });
};
