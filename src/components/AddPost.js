import { useState } from "react"

import { useNavigate } from 'react-router-dom'

import { post } from "../services/authService"

import CreatableSelect from 'react-select/creatable'


const AddPost = () => {

  const [addPost, setAddPost] = useState({
    post: "",
    image: "",
    type: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setAddPost((prev) => ({...prev, [e.target.name]: e.target.value}))
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

    post('/posts/create', addPost)
    .then((results) => {
      console.log('new post', results.data)
      setAddPost({post: ""})
      navigate('/posts')

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
       <form onSubmit={handleSubmit}>

        <label>Type:</label>
        <CreatableSelect id="selector" isClearable options={theseOptions} onChange={handleSelectChange}/>

       <label>Post</label>
        <textarea name='post' value={addPost.post} onChange={handleChange} placeholder="what's on your mind?"/>

        <label>Image:</label>
        <input type='text' name='image' value={addPost.image} onChange={handleChange}/>

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