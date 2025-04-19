import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import supabase from '../supabase';
import TeacherPet from '../assets/TeacherPet.png';
import Napper from '../assets/Napper.png';
import FratBro from '../assets/FratBro.png';
import Tablet from '../assets/Tablet.png';
import CoffeeAddict from '../assets/CoffeeAddict.png';
import Hackathon from '../assets/Hackathon.png';

const images = {"Teacher's Pet": TeacherPet,"Quick Napper": Napper, 
    "Frat Bro": FratBro, "Tablet Master": Tablet, 
    "Coffee Addict": CoffeeAddict, "Hackathon Warrior": Hackathon};
const archetypes = ["Teacher's Pet", "Quick Napper", "Frat Bro", "Tablet Master" , "Coffee Addict", "Hackathon Warrior"];


const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [name, setName] = useState("");
  const [arch, setArch] = useState(10);


  function attribute(value) {
    setArch(value);
  }

  function handleText(value) {
    setName(value);
  }

  async function updateClassmate() {
    if (name.length > 0 && arch < 10){
      const { error } = await supabase
      .from('crewmates')
      .update({ name: name, archetype: archetypes[arch]})
      .eq('id', id)
      setArch(10);
      setName("");
      fetchStudent();
    }   
  }

  async function deleteClassmate() {
    const response = await supabase
        .from('crewmates')
        .delete()
        .eq('id', id);
        navigate('/classroom');    
}   
  
  


  const fetchStudent = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select('*')
      .eq('id', id)
      .single();

    if (error) console.error('Error fetching student:', error);
    else setStudent(data);
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div className="student-detail">
        <div className="student-basics">
            <img src={images[student.archetype]} width="200px" />
            <h2>{student.name}</h2>
            <p>Archetype: {student.archetype}</p> 
        </div>
      <div className="buttons">
        <div className="edit-button" onClick={() => deleteClassmate()}>
            <h4> Delete</h4>
        </div>
      </div>
      

      <div className={`edit-form`}>
      <h3> Name:</h3>
          <form>
            <input
                type="text"
                value={name}
                onChange={(e) => handleText(e.target.value)}
            />
            </form>
        <h3> Archetype:</h3>
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
          <div className="edit-button" onClick={() => updateClassmate()}>
            Update
          </div>
          <div className="edit-button">
          <Link to={`/students/${id}`}>
            Back
            </Link>
          </div>
      </div>
    </div>
  );
};

export default EditPage;