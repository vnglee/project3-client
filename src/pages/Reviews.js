import { useContext } from "react"
import { LoadingContext } from "../context/loading.context"
import PostCard from "../components/PostCard"

const Reviews = () => {

    const {posts, search} = useContext(LoadingContext)

  return (
    <div>
    <h1>Reviews</h1>

    

    <>

    {posts.filter((element) => element.type.includes(search)).map((post) => {
  return (
    <PostCard key={post._id} post={post}/>
  )
})}
    </>


    </div>
  )
}

export default Reviews