import React from 'react';
import { useState, useEffect } from 'react';

import '../index.css';
import supabase from '../supabase.js';
import StudentCard from '../components/StudentCard.jsx';

const Classroom = () => {
  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState(0);
  const [arch, setArch] = useState("");

  const archetypes = ["Teacher's Pet", "Quick Napper", "Frat Bro", "Tablet Master" , "Coffee Addict", "Hackathon Warrior"];

  useEffect(() => {
    const fetchClassmates = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').order('updated_at', { ascending: false });;
      if (error) {
        console.error('Error fetching students:', error);
      } else {
        setStudents(data);
      }
    };

    const fetchStats = async () => {
      let count = [0, 0, 0, 0, 0, 0];
      
      const { data, error } = await supabase.from('crewmates').select('archetype');
      if (error) {
        console.error('Error fetching students:', error);
      } 
      else {
        console.log(data);
        for (let i = 0; i < archetypes.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (archetypes[i] == data[j].archetype) {
              count[i] = count[i] + 1;
            }
          }
        } 
        console.log(count);

        let max = count[0];
        let maxIndex = 0;

        for (let i = 0; i < count.length; i++) {
          if (count[i] > max) {
            max = count[i];
            maxIndex = i;
          }
        }
        const final = (max / data.length).toFixed(2) * 100; 
        setArch(archetypes[maxIndex]);
        if (max == 0 && data.length == 0) {
          setStats(0);
        }
        else {
          setStats(final);
        }
      }
    }

    fetchClassmates();
    fetchStats();
  }, []);

  function classSummary(arch) {
    if (stats > 0) {
      switch (arch) {
        case "Teacher's Pet":
          return "Your class will have super high grades!";
        case "Quick Napper":
          return "Your class will need pillows and maybe some blankets!";
        case "Frat Bro":
          return "Your class might turn your lecture into a party!";
        case "Tablet Master":
          return "Your class is going to have the best notes";
        case "Coffee Addict":
          return "Your class might have a wide spread case of the jitters!";
        case "Hackathon Warrior":
          return "Your class will be busy leet coding!";              
      }
    }

    else {
      return "Your class has very low attendance..";
    }
  }

  return (
    <div className="class-container">
      <h2>Classroom</h2>
      <h3> {stats == 0 ? "You have 0 students, the least of any class!": `In your class, ${stats}% of students are a ${arch}, the most of any archetype!`}</h3>
      <p> {classSummary(arch)}</p>
      <div className="class-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            archetype={student.archetype}
          />
        ))}
      </div>
    </div>
  );
};

export default Classroom;