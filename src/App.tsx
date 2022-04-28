import React from "react";
import Skeleton from "./skeleton/skeleton";

function App() {
  return (
    <div
      style={{
        margin: 10,
        width: 500,
        height: 300,
        border: "1px solid red",
        padding: 15,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 15 }}>
          <Skeleton.Avatar height={100} width={100} />
        </div>
        <div style={{ width: "100%" }}>
          <Skeleton.Text
            height={20}
            containerHeight={40}
            lastLineLength="80%"
          />
        </div>
      </div>
      <div style={{ marginTop: 15 }}>
        <Skeleton.Text height={16} containerHeight={100} lastLineLength="80%" />
      </div>
    </div>
  );
}

export default App;
