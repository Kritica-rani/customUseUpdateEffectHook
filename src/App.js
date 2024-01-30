import React, { useState, useRef, useEffect } from "react";

export function useUpdateEffect(effect, deps) {
  const ref = useRef(true);
  useEffect(() => {
    if (!ref.current) {
      return effect();
    } else {
      console.log("skipping the effect");
      ref.current = false;
    }
  }, deps);
}

export function App() {
  const [data, setData] = useState(0);
  useUpdateEffect(() => {
    console.log("Update useUpdateEffect only", { data });
  }, [data]);

  return (
    <div>
      <h1>Let's skip the call in first render</h1>
      <button onClick={() => setData(data + 1)}> result</button>
      {data}
    </div>
  );
}
