import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { post } from "../services/authService"
import { LoadingContext } from "../context/loading.context"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddComment = ({postId, comments, setCommentsArray}) => {

  console.log('post id', postId)

const [addComment, setAddComment] = useState({comment: ""})


const navigate = useNavigate()

const handleChange = (e) => {
  setAddComment((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault()

  post(`/comments/add-comment/${postId}`, addComment)
  .then((results) => {
    console.log('new post', results.data)
    setAddComment({comment: ""})
    setCommentsArray([...comments, addComment])
    // navigate(`/posts/detail/${post._id}`)

  })
  .catch((err) => {
    console.log(err)
  })
}


  return (
    <div>
    

    {/* <form onSubmit={handleSubmit}>
    
        <input type="text" name="comment" value={addComment.comment} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form> */}
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} type="text" name="comment" value={addComment.comment} onChange={handleChange} placeholder="Add a comment..."/>
      </Form.Group>
      <Button className="comment-btn" variant="light" size="sm"  type="submit">
        Submit
      </Button>
    </Form>
    
    
    
    </div>
  )
}

export default AddComment