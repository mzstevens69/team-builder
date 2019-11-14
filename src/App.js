import React, { useState } from 'react';
import Form from './components/Form';
import Members from './components/Members';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Johnny Hacker',
      email: 'yourmime@gotcha.com',
      role: 'Backend Whiz'
      


    },
    {
      id: 2,
      name: 'Phil Grinned',
      email: 'letstalk@hugz.com',
      role: 'UI Legend'  
    }
  ]);


  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
        <h1>Dev Superstars</h1>
        <Form addNewMember={addNewMember}/>
        <Members members={members} />
    </div>
  );
}

export default App;
