import { useContext, useState } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { post } from "../services/authService"
import { Container } from "react-bootstrap";

const Login = () => {

  const { setUser } = useContext(LoadingContext)

  const {storeToken} = useContext(AuthContext)

  const [thisUser, setThisUser] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setThisUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    post('/auth/login', thisUser)
      .then((results) => {
        console.log('login', results.data)
        storeToken(results.data.authToken)
        setUser(results.data.user)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    // <div>
    // Login

    // <form onSubmit={handleSubmit}>
    // <label>Email</label>
    // <input type="text" name="email" value={thisUser.email} onChange={handleChange}/>

    // <label>Password</label>
    // <input type="text" name="password" value={thisUser.password} onChange={handleChange}/>

    //   <button type="submit">Login</button>
    // </form>


    // </div>
     
    // <div className="place-items-center">
    <div>
    {/* <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
  <form  onSubmit={handleSubmit}>
   
      <label >
        Email
      </label>
      <input type="text" name="email" value={thisUser.email} onChange={handleChange} placeholder="Email" />
 
      <label>
        Password
      </label>
      <input type="password" name="password" value={thisUser.password} onChange={handleChange} placeholder="**************" />
   
      <button type="submit">
        Sign In
      </button>

  </form> */}
  <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
<Container className="d-grid h-100" id="login-container">
  <Form className="border" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={thisUser.email} onChange={handleChange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={thisUser.password} onChange={handleChange} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
    </Container>
</div>
//  </div>
  )
}

export default Login