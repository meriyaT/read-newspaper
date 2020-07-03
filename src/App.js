import React from "react";
import ReactDOM from "react-dom";
import NewsPaper from "./NewsPaper";

const App = () => {
  return (
    <div>
      <NewsPaper />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
