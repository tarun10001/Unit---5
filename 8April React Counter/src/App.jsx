import {useState} from "react";
import './App.css';
import { Category } from "./components/Category";

function App() {
  const [counter, setCounter] = useState(0);

const handleChange = (value) => {
  setCounter(counter + value);
}
const handleChanged = (value) => {
  setCounter(counter * value);
}

//CONDITIONAL RENDERING
// if (counter >= 10) {
//   return <h4>Counter reached maximum value</h4>
// }

  return (
    <div className="App">
       <h3>Counter: {counter}</h3>
       <button onClick={() => handleChange(-1)}>-</button>
       <button onClick={() => handleChange(1)}>+</button>
       <button onClick={() => handleChanged(2)}>Double</button>

<div className={counter % 2 === 0 ? "Even" : "Odd"}>Number is {counter % 2 === 0 ? "Even" : "Odd"}</div>

    </div> 
  )


  // const navbar = [
  //   {
  //     image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  //     title: "Top Offers",
  //   },
  //   {
  //     image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  //     title: "Grocery",
  //   }
  // ]

//   return (
//   <div className="nav">
//     {navbar.map((el) => (
//  <Category image={el.image} label={el.title} />
//     ))}
//   </div>
// );
}

export default App;