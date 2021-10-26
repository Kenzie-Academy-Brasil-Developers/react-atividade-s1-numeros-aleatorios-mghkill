import { useState } from "react";
import "./style.css";
const Generator = () => {
  const [count, setCount] = useState(Math.floor(Math.random() * 100) + 1);

  return (
    <>
      <div className="numberCount">{count}</div>

      <button
        onClick={() => setCount(Math.floor(Math.random() * 100) + 1)}
        className="buttonGenerator"
      >
        Generator Number
      </button>
    </>
  );
};
export default Generator;
