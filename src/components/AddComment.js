import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { post } from "../services/authService"

const AddComment = () => {

const [addComment, setAddComment] = useState({comment: ""})


const navigate = useNavigate()

const handleChange = (e) => {
  setAddComment((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault()

  post('/comments/add-comments', addComment)
  .then((results) => {
    console.log('new post', results.data)
    setAddComment({post: ""})
    navigate('/posts/detail/:id')

  })
  .catch((err) => {
    console.log(err)
  })
}


  return (
    <div>
    Add Comment

    <form onSubmit={handleSubmit}>
        <label>Comment:</label>
        <input type="text" name="email" value={addComment.comment} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
    
    
    
    
    </div>
  )
}

export default AddComment