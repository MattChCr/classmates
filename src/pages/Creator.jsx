import React from 'react';
import { useState } from 'react'
import '../index.css';

import supabase from '../supabase.js';

const Creator = () => {
  const archetypes = ["Teacher's Pet", "Quick Napper", "Frat Bro", "Tablet Master" , "Coffee Addict", "Hackathon Warrior"];

  const [name, setName] = useState("");
  const [arch, setArch] = useState(10);


  function attribute(value) {
    setArch(value);
  }

  function handleText(value) {
    setName(value);
  }

  async function makeClassmate() {
    if (name.length > 0 && arch < 10){
      const { error } = await supabase
      .from('crewmates')
      .insert({ name: name, archetype: archetypes[arch]})
      setArch(10);
      setName("");
    } 
    
  }

  return (
    <div className="create-container">
      <h1> Create your student! </h1>
      <p>
        Create a bean-shaped college student! Name them and choose an archetype! 
      </p>
      <img src="../src/assets/Crewmates-02.png" width="25%"></img>
      <div className="create-box">
        <div className="create-slot">
          <h2> Name:</h2>
          <form>
            <input
                type="text"
                value={name}
                onChange={(e) => handleText(e.target.value)}
            />
        </form>
        </div>
        <div className="create-slot">
          <h2> Archetype:</h2>
          <div className="create-arch">
          {archetypes.map((type, index) => (
              <h4
                key={index}
                onClick={() => attribute(index)}
                className={arch === index ? 'selected' : ''}
              >
                {type}
              </h4>
            ))}
          </div>
          
        </div>
        <div className="create-slot">
          <div className="create-submit" onClick={() => makeClassmate()}>
            <h3> Create Classmate! </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Creator;