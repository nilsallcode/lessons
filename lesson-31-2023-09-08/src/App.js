import { useState, useEffect, useLayoutEffect, useRef, useReducer, useMemo, useCallback } from "react";
import { useEmojis } from "./hooks/useEmojis";
import { useUser } from "./context/UserContext";

const backgroundReducer = (state, action) => {
  switch (action) {
    case 'red':
      return '#ef4444';
    case 'blue':
      return '#3b82f6';
    case 'green':
      return '#22c55e';
    default:
      return '#eab308';
  }
};

function App() {

  const [user, setUser] = useUser();

  const [count, setCount] = useState(0);
  const [emojis, setEmojis] = useEmojis([]);
  const [emoji, setEmoji] = useState("");
  const expensiveValue = useMemo(() => {
    console.log("rendered");
    return 4 * 1000;
  }, []);

  const [backgroundColor, dispatch] = useReducer(backgroundReducer, 'red');

  const buttonRef = useRef();

  const buttonClick = () => {

    buttonRef.current.innerText = "Increment more!";

    dispatch("green");

    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const index = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[index]);
  }, [count]);

  return (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col text-center gap-6">
        <h2 className="text-2xl">{emoji}</h2>
        <h1 className="text-4xl">{count}</h1>
        <button style={{ backgroundColor: backgroundColor }} ref={buttonRef} onClick={buttonClick} className="bg-blue-500 text-white p-2">
          Increment!
        </button>
        <div>{user.name}</div>
      </div>
    </div>
  );
}

export default App;
