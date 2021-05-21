import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pets, setPets]=useState<any[]|null>(null);
  const [loading,setLoading]=useState<boolean>(true);

  useEffect(()=>{
    const url='http://localhost:8000/pets'
    fetch(url)
        .then(response => response.json())
        .then(data => {
          setPets(data.pets);
          setLoading(false);
        });
  },[setPets,setLoading])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {(!loading && pets) && <div>
          <p>
            Here, take some pets
          </p>
          <ul>
          {pets.map(pet=><li>
            {pet.name}: {pet.age} years old
          </li>)}
          </ul>
        </div>}
      </header>
    </div>
  );
}

export default App;
