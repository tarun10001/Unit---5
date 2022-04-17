import { useEffect, useState } from "react";


export function Time({start,end}) {

  const [second, setSecond] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setSecond((prev) => {
        if (prev >= end) {
          clearInterval(id);
          return end;
        }
        return prev + 1;
      })
  }, 1000);

return () => {
  clearInterval(id);
};
  }, []);


  return (

    <div className="App">
      <p>Timer starting from 3 till 16</p>
      <h1>{second}</h1>
    </div>
  )
};