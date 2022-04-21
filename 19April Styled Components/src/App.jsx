import './App.css';
import Button from "./components/Button";


function App() {

  
  return (

    <div className="App">
      
<div>

<Button bgColor="#3e9cfb" padding="15px 25px" color="#fff" fontSize="20px" border="none" >Primary Button</Button>
      <Button bgColor="#fff" padding="15px 25px" color="#000" fontSize="20px" border="2px solid #ccc" >Default Button</Button>
      <Button bgColor="#fff" padding="15px 25px" color="#000" fontSize="20px" border="2px dotted #ccc" >Dashed Button</Button>
      <Button bgColor="#fff" padding="15px 25px" color="#000" fontSize="20px" border="none" >Text Button</Button>
      <Button bgColor="#fff" padding="15px 25px" color="#3e9cfb" fontSize="20px" border="2px solid #ccc" >Link Button</Button>
</div>

    </div>
  );
}

export default App;