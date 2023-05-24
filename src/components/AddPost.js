import { useState } from "react"

import { useNavigate } from 'react-router-dom'

import { post } from "../services/authService"

import CreatableSelect from 'react-select/creatable'
import { Textarea } from "@material-tailwind/react";
import { fileChange } from "../services/fileChange";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const AddPost = ({posts, setPosts}) => {
  const [addPost, setAddPost] = useState({
    post: "",
    image: "",
    type: "general"
  })
  
  console.log('add post', addPost)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setAddPost((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleFileChange = (e) => {

    // setButtonDisabled(true)

    fileChange(e)
      .then((response) => {
        console.log(response.data);
        setAddPost((prev) => ({...prev, [e.target.name]: response.data.image}));
        // e.target.value = null
        // setButtonDisabled(false);
      })
      .catch((err) => {
        // setButtonDisabled(false);
        console.log("Error while uploading the file: ", err);
      });

}

  const handleSelectChange = (e) => {
    console.log("this is e", e)
    if (!e) {
      setAddPost((prev) => ({
        post: "",
        image: "",
        type: "",
      }));
    } else {
      setAddPost({
        post: "",
        image: "",
        type: e.value,
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('this is the event', e.target[2])
    post('/posts/create', addPost)
    .then((results) => {
    
      console.log('new post', results.data)
      setPosts([ results.data, ...posts])
      setAddPost({
        post: "",
        image: undefined,
        type: "general",
      });
      e.target[2].value = null
      console.log('posts', posts)
      // navigate('/posts')
      console.log('this is post post', addPost)

    })
    .catch((err) => {
      console.log(err)
    })
  

   
  }


  const theseOptions = [
    {
      label: "general",
      value: "general"
    },
    {
      label: "recipe",
      value: "recipe"
    },
    {
      label: "review",
      value: "review"
    }
  ];

  return (
    <div>
    <h3>Add Post</h3>
       {/* <form onSubmit={handleSubmit}>

        <CreatableSelect id="selector" isClearable options={theseOptions} onChange={handleSelectChange}/>

       <label>Post</label>
       <div>
        <Textarea label="Message" name="post" value={addPost.post} onChange={handleChange} placeholder="what's on your mind?"/>
        </div>
        <label>Image:</label>
        <input type='file' name='image' onChange={handleFileChange} />

        <button type="submit">Submit</button>
       </form> */}

       <Container className="d-grid h-100" id="login-container">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Post</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" name="post" value={addPost.post} onChange={handleChange} placeholder="what's on your mind?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" name='image' onChange={handleFileChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
    </Container>

    </div>
  )
}

export default AddPost

// author: {type: Schema.Types.ObjectId, ref: 'User'},
// post: String,
// likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
// image: String,
// comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]