import React, { useState } from 'react';
import styled from 'styled-components'

const FormStyle = styled.div `
    color: midnightblue
    font-size: 1.6rem;

`
//styled role input
const Role = styled.div `
    margin-left: 5px;
    
`
//styled Name input
const Name = styled.span `
    margin-right: 5px;
`
const Button = styled.button`
    margin-left: 6.7%;
    width: 12%;
    background-color: dodgerblue;
    font-size: .85rem;
    color: white;
    border-radius: 3px
    
`


//Form to sign-up as a member
const Form = (props) => {
    const [member, setMember] = useState({
    name: '', 
    email: '', 
    role: ''
});
//create new Member
    const handleNewMembers = event => {
        setMember({...member, [event.target.name] : event.target.value});
    }
    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member);
        //resetting form
        setMember({name: '', email: '', role: ''})
    }
    return (
        <FormStyle>
          <form onSubmit={submitForm}>
              <Name>
                   Name:
                  <input id='name' name='name' type='text' onChange={handleNewMembers} value={member.name}/>
              </Name>
              <br/>
              <label>
                   Email:
                  <input id='email' name='email' type='text' onChange={handleNewMembers} value={member.email}/>
              </label>
              <br/>
              
              <Role>
                   Role :                   
                  <input id='role' name='role' type='text' onChange={handleNewMembers} value={member.role}/>              
              </Role>
              
              <br/>
              
            
      
              <Button type='submit'>Be A Superstar</Button>
          </form>
        </FormStyle>

    )
}


export default Form;