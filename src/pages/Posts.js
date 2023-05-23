import { useState, useEffect } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import {get} from '../services/authService'
import AddPost from "../components/AddPost"
import PostCard from "../components/PostCard"
import AddComment from "../components/AddComment"
import EditPosts from "./EditPosts"
import { Link, useParams } from "react-router-dom"


const Posts = () => {
const [search, setSearch] = useState("")
const [posts, setPosts] = useState([])

// const {postId} = useParams

console.log(search)
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
    <label htmlFor="check">Recipes </label>
    <input type="checkbox" value="recipe" onChange={(e) => {e.target.checked ?  setSearch(e.target.value) : setSearch("")}}/>

    <label htmlFor="check">Reviews </label>
    <input type="checkbox" value="review" onChange={(e) => {e.target.checked ?  setSearch(e.target.value) : setSearch("")}}/>
     <AddPost />
<br/>
See Posts:
<br/><br/>
{posts.filter((element) => element.type.includes(search)).map((post) => {
  return (
    <PostCard key={post._id} post={post}/>
  )
})}
<br/>

<br/>
<br/>
{/* <AddComment/> */}
    </div>
  )
}

export default Posts