import { useState, useEffect, useContext } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import {get} from '../services/authService'
import AddPost from "../components/AddPost"
import PostCard from "../components/PostCard"
import AddComment from "../components/AddComment"
import EditPosts from "./EditPosts"
import { Link, useParams } from "react-router-dom"


const Posts = () => {
// const [search, setSearch] = useState("")
// const [posts, setPosts] = useState([])

const {search, setSearch, posts, setPosts, getAllPosts} = useContext(LoadingContext)
// const {postId} = useParams

console.log(search)

useEffect(() => {
  getAllPosts()
  setSearch("")
}, [])

  return (
    <div>
    {/* <label htmlFor="check">Recipes </label>
    <input type="checkbox" value="recipe" onChange={(e) => {e.target.checked ?  setSearch(e.target.value) : setSearch("")}}/>

    <label htmlFor="check">Reviews </label>
    <input type="checkbox" value="review" onChange={(e) => {e.target.checked ?  setSearch(e.target.value) : setSearch("")}}/> */}
     
     {/* <div>
      <Link to="/recipes"><button onClick={() => setSearch("recipe")}>See Recipes</button></Link>
      <Link to="/reviews"><button onClick={() => setSearch("review")}>See Reviews</button></Link>
     </div> */}
     
     <AddPost posts={posts} setPosts={setPosts}/>
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

    </div>
  )
}

export default Posts