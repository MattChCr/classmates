import React from 'react';
import {Link} from 'react-router-dom';
import TeacherPet from '../assets/TeacherPet.png';
import Napper from '../assets/Napper.png';
import FratBro from '../assets/FratBro.png';
import Tablet from '../assets/Tablet.png';
import CoffeeAddict from '../assets/CoffeeAddict.png';
import Hackathon from '../assets/Hackathon.png';

const images = {"Teacher's Pet": TeacherPet,"Quick Napper": Napper, 
    "Frat Bro": FratBro, "Tablet Master": Tablet, 
    "Coffee Addict": CoffeeAddict, "Hackathon Warrior": Hackathon};

const StudentCard = ({ id, name, archetype}) => {
  return (
    <div className="student-card">
      <img src={images[archetype]} width="150px" />
      <h3>{name}</h3>
      <p>{archetype}</p>
      <div className="create-arch">
      <Link to={`/students/${id}`}>
          <h4>Details...</h4>
        </Link>
      </div>
    </div>
  );
};

export default StudentCard;