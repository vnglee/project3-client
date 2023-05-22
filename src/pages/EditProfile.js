import { useState, useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { LoadingContext } from '../context/loading.context'

import { AuthContext } from '../context/auth.context'

import { post } from '../services/authService'

const EditProfile = () => {

  const {user, setUser} = useContext(LoadingContext)
  const {storeToken} = useContext(AuthContext)

  const navigate = useNavigate()

  const [updatedUser, setUpdatedUser] = useState(null)

  const handleTextChange = (e) => {
    setUpdatedUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    post(`/users/update/${user._id}`, updatedUser)
    .then((results) => {
      console.log('updated results', results.data)
      storeToken(results.data.authToken)
      setUser(results.data.user)
      navigate('/profile')
    })
    .catch((err) => {
      console.log(err)
    })
  }

    useEffect(() => {
      setUpdatedUser(user)
    }, [user])
  

  return (
    <div>
    Edit Profile

    {
      updatedUser ?

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id="name" name="name" type="text" value={updatedUser.name} onChange={handleTextChange}/>
      
        <label htmlFor='profilePic'>Profile Picture:</label>
        <input id="profilePic" name="profilePic" type="text" value={updatedUser.profilePic} onChange={handleTextChange}/>
      <button type="submit">Update</button>
      </form>
      :
      <p>Loading...</p>
    }


    </div>
  )
}

export default EditProfile