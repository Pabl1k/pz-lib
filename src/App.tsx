import React, { useState } from "react";
import { useLocalStorage as UseLocalStorage } from "./hooks/useLocalStorage/useLocalStorage";

function App() {
  const [keyValue, setKeyValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const onSetHandler = (key: string, value: string) => {
    UseLocalStorage("set", key, value);
  };

  const [getKey, setGetKey] = useState<string>("");
  const [getData, setGetData] = useState<string>("");
  const onGetHandler = (key: string) => {
    const data = UseLocalStorage("get", key);
    setGetData(!!data ? data : "Key does not exist");
  };

  const [removeKey, setRemoveKey] = useState<string>("");
  const onRemoveHandler = (key: string) => {
    UseLocalStorage("remove", key);
  };
  return (
    <div style={{ margin: 10, display: "flex", flexDirection: "column" }}>
      <div>
        SET:{" "}
        <input
          placeholder="key"
          value={keyValue}
          onChange={(e) => setKeyValue(e.currentTarget.value)}
        />
        <input
          placeholder="value"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            onSetHandler(keyValue, inputValue);
            setKeyValue("");
            setInputValue("");
          }}
        >
          set
        </button>
      </div>
      <div style={{ marginTop: 20 }}>
        GET:{" "}
        <input
          placeholder="key"
          value={getKey}
          onChange={(e) => setGetKey(e.currentTarget.value)}
        />
        <button onClick={() => onGetHandler(getKey)}>get</button> Result:{" "}
        {getData}
      </div>
      <div style={{ marginTop: 20 }}>
        REMOVE:{" "}
        <input
          placeholder="key"
          value={removeKey}
          onChange={(e) => setRemoveKey(e.currentTarget.value)}
        />{" "}
        <button onClick={() => onRemoveHandler(removeKey)}>remove</button>
      </div>
    </div>
  );
}
export default App;
