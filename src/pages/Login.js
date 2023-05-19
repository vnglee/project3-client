import { useContext, useState } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import { useNavigate } from "react-router-dom"

import { post } from "../services/authService"

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
        navigate('/profile')
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div>
    Login

    <form onSubmit={handleSubmit}>
    <label>Email</label>
    <input type="text" name="email" value={thisUser.email} onChange={handleChange}/>

    <label>Password</label>
    <input type="text" name="password" value={thisUser.password} onChange={handleChange}/>

      <button type="submit">Login</button>
    </form>


    </div>
  )
}

export default Login