import React, { useState } from 'react';


const Form = (props) => {
    const [members, setMembers] = useState({
    name: '', 
    email: '', 
    role: ''
});
    const handleNewMembers = event => {
        setMembers({...members, [event.target.name] : event.target.value});
    }
    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(members);
        //resetting form
        setMembers({name: '', email: '', role: ''})
    }
    return (
        
          <form onSubmit={submitForm}>
              <input onChange={handleNewMembers}
              id='name'
              value={members.name}
              type='text'
              name='name'
              placeholder='Your Name'
              />
              <br />
               <input onChange={handleNewMembers}
              id='name'
              value={members.name}
              type='email'
              name='name'
              placeholder='Your email'
              />
              <br />
                <input onChange={handleNewMembers}
              id='name'
              value={members.name}
              type='text'
              name='name'
              placeholder='Your Role'
              />
              <br />
              <button type='submit'>Make A Superstar</button>
          </form>
        

    )
}


export default Form;