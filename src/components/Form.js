import React, { useState } from 'react';


const Form = (props) => {
    const [member, setMember] = useState({
    name: '', 
    email: '', 
    role: ''
});
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
        <div>
          <form onSubmit={submitForm}>
              <label>
                  Your Name:
                  <input id='name' name='name' type='text' onChange={handleNewMembers} value={member.name}/>
              </label>
              <br/>
              <label>
                  Your Email:
                  <input id='email' name='email' type='text' onChange={handleNewMembers} value={member.email}/>
              </label>
              <br/>
              <label>
                  Your Role:
                  <input id='role' name='role' type='text' onChange={handleNewMembers} value={member.role}/>
              </label>
              <br/>
              
            
      
              <button type='submit'>Make A Superstar</button>
          </form>
        </div>

    )
}


export default Form;