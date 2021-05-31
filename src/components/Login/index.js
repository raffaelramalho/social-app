import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form,
   FormGroup, 
  FormControl, 
  ControlLabel, 
  HelpBlock,
  Button,
  Input,
  ButtonToolbar } from 'rsuite';

import 'rsuite/dist/styles/rsuite-default.css';

function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

 const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Sign In</h1>
      
      <form onSubmit={ handleSubmit }>
          <FormGroup>
              <ControlLabel>Username</ControlLabel>
                  <input className='rs-input' type="text" onChange={ e => setUserName (e.target.value) }/>
              
          </FormGroup>
          <FormGroup>
              <ControlLabel>Password</ControlLabel>
                  <input className='rs-input' type="password" onChange={ e=> setPassword (e.target.value) }/>
     
          </FormGroup>
          <FormGroup>
              <ButtonToolbar>
                  <Button color='violet' 
                  type="submit"> Log in </Button>
                </ButtonToolbar>
          </FormGroup>
        </form> 
  </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};