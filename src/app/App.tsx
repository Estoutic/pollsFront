import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Feed from "../pages";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Feed></Feed>
      </QueryClientProvider>
    </>
  );
}

export default App;
