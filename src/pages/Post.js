import { useState, useEffect } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import {get} from '../services/authService'
import AddPost from "../components/AddPost"
import PostCard from "../components/PostCard"


const Post = () => {

const [posts, setPosts] = useState([])

const getAllPosts = () => {
  get('/posts')
  .then((results) => {
    setPosts(results.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

useEffect(() => {
  getAllPosts()
}, [])

  return (
    <div>
     <AddPost />

{posts.map((post) => {
  return (
    <PostCard key={post._id} {...post}/>
  )
})}


    </div>
  )
}

export default Post