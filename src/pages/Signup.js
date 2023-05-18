import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const [newUser, setNewUser] = useState({
        fullName: '',
        email: '',
        password: ''    
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     .then((response) => {
    //         console.log('response', response.data)

    //     })
    //         navigate('/profile')
    //     })
    }

  return (
    <div>
    Signup
    
    <form>
        <label>Full Name:</label>
        <input type='text' name='fullName' value={newUser.fullName} onChange={handleChange}/>

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