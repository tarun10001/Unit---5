import { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    department: "",
    marital_status: "",
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]:value});
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // axios.post("http://localhost:8080/data", formData).then(() => {
  //   //   alert("Added successfuly");
  //   // });
  // };



  const handleSubmit = async() => {
    const data = await fetch("http://localhost:8080/data").then((d) => 
    d.json());
    setFormData(data);
    };


  return (

    <form onSubmit={handleSubmit}>

      <label>Name : </label>
      <input id="name" type="text" onChange={handleChange} />
      <br />

      <label>Age : </label>
      <input id="age"type="number" onChange={handleChange} />
      <br />
      
      <label>Address : </label>
      <input id="name" type="text" onChange={handleChange} />
      <br />

      <label>Department : </label>
      <select onChange={handleChange} name="" id="department">
      <option value="">Select one</option>
      <option value="">Civil</option>
      <option value="">Mechanical</option>
      <option value="">CS</option>
      <option value="">iT</option>
      </select>
      <br />
      
      <label>Salary : </label>
      <input onChange={handleChange} type="number" id="salary" />
      <br />

      
      <label>Marital status : </label>
      <br />
      <label>Yes</label>
      <input id="marital_status" name="married" 
      onChange={handleChange} type="Checkbox" 
      value="married" />
      <br />

      <label >No</label>
      <input
        id="marital_status"
        onChange={handleChange}
        name="married"
        value="unmarried"
        type="Checkbox"
      />
      <br />
      
      
      <input onChange={handleChange} type="submit" value={"Submit Data"} />
      <br />
      <br />


    </form>
  )

}