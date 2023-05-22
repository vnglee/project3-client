import { useState } from "react"

import { useNavigate } from 'react-router-dom'

import { post } from "../services/authService"


const AddPost = () => {

  const [addPost, setAddPost] = useState("")

  // const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setAddPost((prev) => ({...prev, [e.target.name]: e.target.value}))
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    post('/posts/create', addPost)
    .then((results) => {
      console.log('new post', results.data)
      setAddPost("")
      // navigate('/posts')

    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>

       <form onChange={handleSubmit}>
       <label>Add Post</label>
        <input type='text' name='post' onChange={(e) => setAddPost(e.target.value)} placeholder="what's on your mind?"/>
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