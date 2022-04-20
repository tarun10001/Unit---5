import { useEffect, useRef, useState } from "react";


export function Time() {

  const [second, setSecond] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    startInterval();
  }, []);

  const startInterval = () => {
    counterRef.current = setInterval(() => {
      setSecond((p) => p + 1);
    }, 1000);
  }


  return (

    <div className="App">

<h3>Timer: {second}</h3>

<button onClick={() => {
  clearInterval(counterRef.current)
}}>Pause</button>

<button onClick={() => {
  startInterval();
}}>Start</button>

<button onClick={() => {
  clearInterval(counterRef.current);
  setSecond(0);
}}>Reset</button>

    </div>
  )
};