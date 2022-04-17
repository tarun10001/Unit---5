import './App.css';
import {Time} from "./components/timer"


function App() {
  const start = 3;
  const end = 16;
  return (
    <div className="App">
      <div>
    <Time start={start} end={end} />
    </div>
    </div>
  );
}

export default App;