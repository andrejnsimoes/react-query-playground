import React from "react";
import AgentDetails from "../components/AgentDetails";
import { ReactQueryConfigProvider } from "react-query";

export const App = () => {
  const queryConfig = {
    retry: 0,
    refetchOnWindowFocus: false
  };

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <AgentDetails />
    </ReactQueryConfigProvider>
  );
};
