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
    <div className="w-full max-w-xs place-items-center">
    <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 place-items-center" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" value={thisUser.email} onChange={handleChange} placeholder="Email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={thisUser.password} onChange={handleChange} placeholder="**************" />
    </div>
    <div className="place-items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
    </div>
  </form>
</div>
//  </div>
  )
}

export default Login