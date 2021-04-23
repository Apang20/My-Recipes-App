import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {

  const APP_ID = '59f653d6';
  const APP_KEY = '96e02fae3d7a4a0146afe8d580454fe5';	
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {

  });


  return (
    <div className="App">
      <form className="search-form">
      <input className="search-bar" type="text"/>
      <button  className="search-button" type="submit"> Search </button>
      </form>
      <h1 onClick={() => setCounter(counter +1)}>{counter}</h1> 
    </div>
  );
};

export default App;
