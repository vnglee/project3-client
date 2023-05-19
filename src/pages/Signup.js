import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/auth.context"
import { LoadingContext } from "../context/loading.context"

import {post} from "../services/authService"


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
    <div>
    Signup
    
    <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type='text' name='name' value={newUser.name} onChange={handleChange}/>

        <label>Email:</label>
        <input type='text' name='email' value={newUser.email} onChange={handleChange}/>

        <label>Password:</label>
        <input type='text' name='password' value={newUser.password} onChange={handleChange}/>

        <button type='submit'>Signup</button>
    </form>
    
    
    </div>
  )
}

export default Signup