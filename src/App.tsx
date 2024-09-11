import { useRef, useState } from "react";
import { Modal } from "./Modal";

function App() {
  const [count, setCount] = useState<number>(0);

  const countRef = useRef<number>(0);

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log("re-render");

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

      <div>
        {/* document.getElementById or document.querySelector("dialog") */}
        <Modal onClose={() => alert("closed")} title="Some Content Modal">
          This is now dynamic content
        </Modal>
      </div>
    </div>
  );
}

export default App;
