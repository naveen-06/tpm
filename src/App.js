import React from "react";

import "./scss/styles.scss";
import Header from "./containers/Header/Header";
import TestFields from "./containers/TestFields/TestFields";

function App() {
  return (
    <div className="app">
      <Header />
      <TestFields />
    </div>
  );
}

export default App;
