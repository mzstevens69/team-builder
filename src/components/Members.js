import React from 'react';
import styled from 'styled-components';
const Card = styled.div `
width: 200px;
height: 200px;
color: midnightblue;
border: 2px solid gray;
border-radius: 12px;
box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.5);
background-color: lightblue;
text-shadow: 3px 3px 6px slategray;
margin-top: 4%;
`
const CardWrapper = styled.div `
display: flex;
justify-content: space-around;

`



const Members = props => {
    return (
        <CardWrapper >
      {props.members.map(member => (
        <Card key={member.id} >
            
          <h2>{member.name}</h2>          
          <p>{member.email}</p>
          <p>{member.role}</p>
        </Card>
        // <label htmlFor='editCard'>Edit Me</label>
        // <input type='checkbox' id='editCard' name='editCard'/>
      ))}                      
        </CardWrapper>
    );
};
export default Members;