import React, { useState } from 'react';
import Form from './components/Form';
import Members from './components/Members';
import './App.css';
import styled from 'styled-components';

const MainTitle = styled.h1 `
    color: lightblue;
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`



function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Ginny Hacker',
      email: 'yourmime@gotcha.com',
      role: 'Backend Whiz'
      


    },
    {
      id: 2,
      name: 'Phil Grinned',
      email: 'letstalk@hugz.com',
      role: 'UI Legend'  
    },
    {
      id: 2,
      name: 'Alison Noice',
      email: 'dabestestever@me.com',
      role: 'Front-End Engineer'  
    } 
  ]);

// add new member function
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
        <MainTitle>Dev Superstars</MainTitle>
        <Form addNewMember={addNewMember}/>
        <Members members={members} />
    </div>
  );
}

export default App;
