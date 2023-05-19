import { useContext, useState } from "react"

import { useNavigate } from 'react-router-dom'

import { AuthContext } from "../context/auth.context"
import { LoadingContext } from "../context/loading.context"

import { post } from "../services/authService"
import { Navigate } from "react-router-dom"


const AddPost = () => {

  const [addPost, setAddPost] = useState('')

  const navigate = useNavigate()

  const handleAddPost = (e) => {
    setAddPost((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    post('/posts/create', addPost)
    .then((results) => {
      console.log('new post', results.data)
      setAddPost('')

    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
    
       <form onChange={handleSubmit}>
        <input type='text' name='post' value={addPost} onChange={handleAddPost} placeholder="what's on your mind?"/>
        <button type="submit">Submit</button>
       </form>

    </div>
  )
}

export default AddPost

// author: {type: Schema.Types.ObjectId, ref: 'User'},
// post: String,
// likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
// image: String,
// comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]