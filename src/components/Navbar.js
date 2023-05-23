import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

const Navbar = () => {

  const {logOutUser} = useContext(AuthContext)

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  return (

   <nav>
   <Link to='/'>Home</Link>

    {
      getToken() ? 

       <>
     <Link to='/profile'>Profile</Link>
      <Link to='/posts'>Posts</Link>
     <button onClick={logOutUser}>Logout</button>

      </>
      :
     <>

     <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>
      </>
    }
     </nav>



  ) 
}

export default Navbar

