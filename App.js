import React from "react";
import Dashboard from "./Dashboard";
import Members from "./Members";
import Collections from "./Collections";
import Settings from "./Settings";

const App = () => {
  return (
    <div>
      <Dashboard />
      <Members />
      <Collections />
      <Settings />
    </div>
  );
};

export default App;
