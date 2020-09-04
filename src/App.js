import React from "react";
import Visual from "./components/Visual";
import Controls from "./components/Controls";
import AppStates from "./contexts/AppStates";

function App() {
  return (
    <AppStates>
      <Controls />
      <Visual />
    </AppStates>
  );
}

export default App;
