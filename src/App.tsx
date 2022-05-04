import React from "react";
import Skeleton from "./skeleton/skeleton";

function App() {
  return (
    <div style={{ width: 300, height: 200 }}>
      <Skeleton.Avatar
        height={100}
        width={100}
      />
    </div>
  );
}
export default App;
