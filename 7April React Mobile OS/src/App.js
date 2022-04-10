import "./App.css"

function App() {
  const mobiles = ['Android', 'Blckberry', 'iPhone',"Windows iPhone"];
  const brands = ["Samsung", "HTC","Micromax","Apple"];
  
  return (
  <div className="main_Div">

<div>
    <h2>Mobile Operating System</h2>
    <ul>
      {mobiles.map(name => <li>
        <p>{name}</p>
      </li>)}
    </ul>
    </div>

<div className="mobile">
    <h2>Mobile Manufacturers</h2>
    <ul>
      {brands.map(name => <li>
        <p>{name}</p>
      </li>)}
    </ul>
    </div>

    </div>
  )
}
export default App;