import { useState } from "react"

import { useNavigate } from 'react-router-dom'

import { post } from "../services/authService"


const AddPost = () => {

  const [addPost, setAddPost] = useState({post: ""})

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
      navigate('/posts')

    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
        <h3>Posts</h3>
       <form onChange={handleSubmit}>
       <label htmlFor="post">Add Post</label>
        <input type='text' name='post' id="post" onChange={handleAddPost} placeholder="what's on your mind?"/>
        <button type="submit">Submit</button>
       </form>

    </div>
  )


//   const [newPost, setNewPost] = useState("")

// const navigate = useNavigate()

// // const handleAddPost = (e) => {
// //     setNewPost((prev) => ({...prev, [e.target.name]: e.target.value}))
// // }

// const handleSubmit = (e) => {
//     e.preventDefault()

//     post('/posts/create', newPost)
//         .then((results) => {
//             console.log("Added Post:", results.data)
//             setNewPost("")
//             // navigate('/posts')
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// }
  
//   return (
//     <div className="AddProject">
//       <h3>Add Post</h3>

//        <form onChange={handleSubmit}>
//         <input type='text' name='post' onChange={(e) => setNewPost(e.target.value)} placeholder="what's on your mind?"/>
//         <button type="submit">Submit</button>
//        </form>

//     </div>
//   );




}

export default AddPost

// author: {type: Schema.Types.ObjectId, ref: 'User'},
// post: String,
// likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
// image: String,
// comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]