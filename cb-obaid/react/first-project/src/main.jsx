import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <ul>
        <li>{5 + 5}</li>
        <li>[[[[[[5 + 5]]]]]]</li>
      </ul> */}
      <button
        onClick={() => {
          setCounter( (prev) => prev + 1);
          setCounter( (prev) => prev + 1);
          setCounter( (prev) => prev + 1);
          setCounter( (prev) => prev + 1); 
        }}
      >
        Add
      </button>

      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Minus
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// react ma function(jo html return kare) ko component khaty hyn
