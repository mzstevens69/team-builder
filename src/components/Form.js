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
        <div>
          <form onSubmit={submitForm}>
              <label>
                  Your Name:
                  <input name='name' onChange={handleNewMembers}/>
              </label>
              <br/>
              <label>
                  Your Email:
                  <input email='email' onChange={handleNewMembers}/>
              </label>
              <br/>
              <label>
                  Your Role:
                  <input role='role' onChange={handleNewMembers}/>
              </label>
              <br/>
              
            
      
              <button type='submit'>Make A Superstar</button>
          </form>
        </div>

    )
}


export default Form;