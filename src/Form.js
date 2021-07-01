import './index.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Countries from "./Countries"

const Form = props => {
  const [state, setState] = useState({
    name: "",
    gender: "",
    country: "",
    description: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  let options = null;
  options=Countries.country.map((e,key) => <option key={key} value={e.name}>{e.name}</option>);

  return (
    <div className='center'>
      <form className='container'>
       <center>  <h1>Form</h1> </center>  
        <div>
          <label> Name: </label>   
          <input type="text" name="name" onChange={handleInputChange}/> 
        </div>

        <div>
          <label> Gender: </label>   
          <input id='male' name='gender' type='radio' value='Male' onChange={handleInputChange}/>Male
          <input id='female' name='gender' type='radio' value='Female' onChange={handleInputChange}/>Female
          <input id='others' name='gender' type='radio' value='Others' onChange={handleInputChange}/>Others
        </div>

        <div>
          <label>Country: </label>
          <select id="country" name="country" onChange={handleInputChange}>
            {
              options
            }
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea name="description" rows="4" cols="50" onChange={handleInputChange}></textarea>
        </div>
        <div>
          <Link to={{pathname: "/result",state}} className='button'>Submit</Link>
          <Link to={{pathname: "/"}} className='button'>Back</Link>
        </div>
      </form>
    </div>
  );
};

export default Form;


