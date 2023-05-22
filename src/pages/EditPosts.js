import { useState } from "react"
import { useParams } from "react-router-dom"
import CreatableSelect from 'react-select/creatable'
import { useNavigate } from "react-router-dom"
import { get, post } from "../services/authService"
import axios from "axios"
import { baseUrl } from "../services/baseUrl"

const EditPosts = () => {

  // const [post, setPost] = useState("")
  // const [image, setImage] = useState("")
  // const [type, setType] = useState("")

  const [edit, setEdit] = useState({
    post: "",
    image: "",
    type: ""
  })

  const {id} = useParams()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setEdit((prev) => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleSelectChange = (e) => {
    console.log("this is e", e)
    if (!e) {
      setEdit((prev) => ({
        post: "",
        image: "",
        type: "",
      }));
    } else {
      setEdit({
        post: "",
        image: "",
        type: e.value,
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    post(`/posts/edit/${id}`, edit)
    .then((results) => {
      console.log('new post', results.data)
      setEdit({post: ""})
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

  const deletePost = () => {
    axios
      .delete(`${baseUrl}/posts/delete/${id}`)
      .then((results) => {
        navigate('/posts')
      })
      .catch((err) => {
        console.log(err)
      })
    
  }


  return (
    <div>
    Edit Posts
    
    <form onSubmit={handleSubmit}>

    <label>Type:</label>
    <CreatableSelect id="selector" isClearable options={theseOptions} onChange={handleSelectChange}/>

    <label>Post</label>
    <textarea name='post' value={edit.post} onChange={handleChange} placeholder="what's on your mind?"/>

    <label>Image:</label>
    <input type='text' name='image' value={edit.image} onChange={handleChange}/>

    <button type="submit">Submit</button>
    </form>

    <button onClick={deletePost}>Delete Post</button>
    
    
    
    </div>
  )
}

export default EditPosts