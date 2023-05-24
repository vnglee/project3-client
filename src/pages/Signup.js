import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/auth.context"
import { LoadingContext } from "../context/loading.context"

import {post} from "../services/authService"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Signup = () => {

  const { setUser } = useContext(LoadingContext)

  const { storeToken } = useContext(AuthContext)

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''    
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      post('/auth/signup', newUser)
          .then((results) => {
              console.log("Signup", results.data)
              storeToken(results.data.authToken)
              setUser({...results.data.user, name: '', email: '', password: '' })
              navigate('/profile')
          })
          .catch((err) => {
              console.log(err)
          })

  }

  return (
    // <div>
    // Signup
    
    // <form onSubmit={handleSubmit}>
    //     <label>Full Name:</label>
    //     <input type='text' name='name' value={newUser.name} onChange={handleChange}/>

    //     <label>Email:</label>
    //     <input type='text' name='email' value={newUser.email} onChange={handleChange}/>

    //     <label>Password:</label>
    //     <input type='text' name='password' value={newUser.password} onChange={handleChange}/>

    //     <button type='submit'>Signup</button>
    // </form>
    
    
    // </div>

    <div>
 
    <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
  {/* <form  onSubmit={handleSubmit}>
   
      <label>
        Full Name
      </label>
      <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Full Name" />
   
 
      <label>
        Email
      </label>
      <input type="text" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
  
   
      <label>
        Password
      </label>
      <input type="password" name="password" value={newUser.password} onChange={handleChange} placeholder="**************" />
   
   
      <button type="submit">
        Sign Up
      </button>
  
  </form> */}


<Container className="d-grid h-100" id="login-container">
  <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
    </Container>
</div>
  )
}

export default Signup