import React, { useState, useEffect }from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [hair, setHair] = useState('');
  const [skin, setSkin] = useState('');
  const [eye, setEye] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [home, setHome] = useState('');

  useEffect(() => {
    // const fetchSwapi = () => 
      axios.get(`https://swapi.co/api/people/1`)
        .then(res => {
          console.log(res.data)
          setName(res.data.name)
          setHeight(res.data.height)
          setMass(res.data.mass)
          setHair(res.data.hair_color)
          setSkin(res.data.skin_color)
          setEye(res.data.eye_color)
          setDob(res.data.birth_year)
          setGender(res.data.gender)
          axios.get(res.data.homeworld)
            .then(res => {
              console.log(res);
              setHome(res.data.name);
            })
        })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="data-cont">
        <h2>{name}</h2>
        <h3>Height: {height}</h3>
        <h3>Weight: {mass}</h3>
        <h3>Hair Color: {hair}</h3>
        <h3>Skin Tone: {skin}</h3>
        <h3>Eye Color: {eye}</h3>
        <h3>Date of Birth: {dob}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Home: {home}</h3>
      </div>
    </div>
  );
}

export default App;
