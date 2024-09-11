import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const countRef = useRef<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        useState
      </button>

      <br />

      <h1>{countRef.current}</h1>
      <button
        onClick={() => {
          countRef.current += 1;
          alert(countRef.current);
        }}
      >
        useRef
      </button>
    </div>
  );
}

export default App;
