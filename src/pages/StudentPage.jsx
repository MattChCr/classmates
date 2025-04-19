import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import { Link } from 'react-router-dom';
import TeacherPet from '../assets/TeacherPet.png';
import Napper from '../assets/Napper.png';
import FratBro from '../assets/FratBro.png';
import Tablet from '../assets/Tablet.png';
import CoffeeAddict from '../assets/CoffeeAddict.png';
import Hackathon from '../assets/Hackathon.png';

const images = {"Teacher's Pet": TeacherPet,"Quick Napper": Napper, 
    "Frat Bro": FratBro, "Tablet Master": Tablet, 
    "Coffee Addict": CoffeeAddict, "Hackathon Warrior": Hackathon};
const descriptions = {"Teacher's Pet": "Their hand is almost never down, adds 30 minutes to the lecture",
    "Quick Napper": "Just taking a 'short' nap before locking in", 
    "Frat Bro": "Probably not all there", 
    "Tablet Master": "The beginning of a self-sustaining technology ecosystem", 
    "Coffee Addict": "A few shots of espresso a day keeps the sleep away", 
    "Hackathon Warrior": "Those internships won't just fall in your lap"};


const StudentPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);


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
            <h1>{student.name}</h1>
            <h4>Archetype: {student.archetype}</h4> 
            <p> {descriptions[student.archetype]}</p>
        </div>
      <div className="buttons">
        <div className="edit-button">
            <Link to={`/students/edit/${id}`}>
            Edit?
            </Link>
        </div>
         <div className="edit-button">
                <Link to={`/classroom`}>
                    Back
                 </Link>
          </div>
      </div>
    </div>
  );
};

export default StudentPage;